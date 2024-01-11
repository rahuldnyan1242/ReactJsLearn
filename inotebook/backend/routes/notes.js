const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator')

// Get all the notes for the user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({user: req.user.id})
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

router.post('/addNotes', fetchuser, [
    body('title', 'Title Should be valid').isLength({ min: 3 }),
    body('description', 'Description should not be blank').isLength({ min: 10 })
], async (req, res) => {

    const {title, description, tag} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const note = new Note({
            title, description, tag,
            user: req.user.id
        })
        const savedNotes = await note.save();
        res.json(savedNotes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}) 


module.exports = router;