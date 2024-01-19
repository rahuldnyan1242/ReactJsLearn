import React, { useContext } from 'react'
import noteContext from '../contexts/notesContext'
import Noteitem from './Noteitem';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Note = () => {

    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })}
        </div>
    )
}

export default Note
