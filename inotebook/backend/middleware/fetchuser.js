const jwt = require('jsonwebtoken');
const JWT_SECRET = 'userjwtsecret';

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).json({error: "Please authentication with valid token."})
    }

    try {
        const string = jwt.verify(token, JWT_SECRET);
        req.user = string.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({error: "Please authentication with valid token."})
    }
}

module.exports = fetchuser;