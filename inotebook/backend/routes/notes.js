const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator')

// Get all the notes for the user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

// Add notes
router.post('/addNotes', fetchuser, [
    body('title', 'Title Should be valid').isLength({ min: 3 }),
    body('description', 'Description should not be blank').isLength({ min: 10 })
], async (req, res) => {

    const { title, description, tag } = req.body;

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
        res.status(500).json({ "Failed": "Internal Server Error", error: error.message });
    }
})

//Update notes
router.put('/updateNote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(401).send("Note Not Found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed")
        } else {
            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json({ note })
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ "Failed": "Internal Server Error", error: error.message });
    }
})


// Delete note with ID
router.delete('/deleteNote/:id', fetchuser, async (req, res) => {

    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(401).send("Note Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed")
        } else {
            await Note.findByIdAndDelete(req.params.id, { $set: note });
            res.send("Note is successfully deleted");
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ "Failed": "Internal Server Error", error: error.message });
    }
})


module.exports = router;