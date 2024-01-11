const express = require('express');
const User = require('../models/User.Js');
const { body, validationResult, oneOf } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const router = express.Router();

const JWT_SECRET = 'userjwtsecret';


// Create a new user route
router.post('/createUser', [
    body('name', 'Name Should not be empty').notEmpty(),
    oneOf([body('email').isEmail(), body('phone').isMobilePhone()], {
        message: "At least one valid contact method must be provided"
    }),
    body('password', 'Password should be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email })
        console.log("Create User :: ", user)
        if (user) {
            return res.status(400).json({ error: "User with this email already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: securedPassword
        })
        const data = {
            user: {
                id: user.id,
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)

        res.json({ authtoken });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

// User login route
router.post('/login', [
    body('email', 'Email Should not be empty').isEmail(),
    body('password', 'Password should not be blank').exists()
], async (req, res) => {

    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email })
        console.log("Login User :: ", user)
        if (!user) {
            return res.status(400).json({ error: "Please use valid credentials." })
        }

        const passwordCompare = bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please use valid credentials." })
        }

        const data = {
            user: {
                id: user.id,
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET)

        res.json({ authtoken });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }

})


// Get user details 
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router