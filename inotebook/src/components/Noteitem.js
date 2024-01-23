import React, { useContext } from 'react'
import noteContext from '../contexts/notesContext'


const Noteitem = (props) => {
    
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote, showAlert } = props;

    const handleDeleteNote = () => {
        deleteNote(note._id);
        showAlert("Note is deleted successfully", "warning");
    }
    const handleUpdateNote = () => {
        // editNote(note)
        updateNote(note);
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">- {note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-regular fa-trash-can mx-2" onClick={handleDeleteNote}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={handleUpdateNote}></i>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default Noteitem
