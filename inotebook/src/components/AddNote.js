import React, { useContext, useState } from 'react'
import noteContext from '../contexts/notesContext'

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleAddNoteClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note is added successfully", "success");
    }

    const onChange = (e) => {
        // ("onChange :: " + [e.target.name] +" : "+ [e.target.value]);
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
            <div style={{marginTop:"4rem"}} >
                <h2>Add a Note</h2>
                <div className="container my-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                        </div>
                        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleAddNoteClick}>Add</button>
                    </form>
                </div>
            </div>
    )
}

export default AddNote
