import NoteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props) => {

    const hostURL = "http://localhost:5000/api/notes"

    const allnotes = []

    const [notes, setNotes] = useState(allnotes);

    //Get all notes
    const fetchAllNotes = async () => {
        const response = await fetch(`${hostURL}/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });

        const notesJson = await response.json();
        setNotes(notesJson);
    }

    //Add note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${hostURL}/addNotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        setNotes(notes.concat(json))
    }

    //Edit Note
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${hostURL}/updateNote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        for (let i = 0; i < json.length; i++) {
            const note = json[i];
            if (note._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }

        }

    }

    //Delete Note
    const deleteNote = async (id) => {
        const response = await fetch(`${hostURL}/deleteNote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setNotes(json);
        // ("New allnote :: ", notes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;