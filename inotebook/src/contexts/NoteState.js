import NoteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props)=>{

    // const obj1 = {
    //     "name": "Rahul",
    //     "learning": "RactJs"
    // }

    // const [state, setState] = useState(obj1);

    // const updateState = setTimeout(()=>{
    //         setState({
    //             "name": "Madhur",
    //             "learning": "Leadership"
    //         })
    // }, 1000);

    const allnotes = [
        {
          "_id": "659ff67be741a0f1e4abafd1",
          "user": "659d4d3959e95488f68945a7",
          "title": "My First Note",
          "description": "This is the first note added.",
          "tag": "Learning",
          "date": "2024-01-11T14:08:59.876Z",
          "__v": 0
        },
        {
          "_id": "659ff67ce741a0f1e4abafd3",
          "user": "659d4d3959e95488f68945a7",
          "title": "My Third Note",
          "description": "This is the third note app I am creating",
          "tag": "General",
          "date": "2024-01-11T14:09:00.028Z",
          "__v": 0
        },
        {
          "_id": "65a6376b512e8a025b5d8415",
          "user": "659d4d3959e95488f68945a7",
          "title": "New Note",
          "description": "This is the new not being added.",
          "tag": "General",
          "date": "2024-01-16T07:59:39.966Z",
          "__v": 0
        },
        {
            "_id": "65a6376b512e8a025b5d8415",
            "user": "659d4d3959e95488f68945a7",
            "title": "New Note",
            "description": "This is the new not being added.",
            "tag": "General",
            "date": "2024-01-16T07:59:39.966Z",
            "__v": 0
          },
          {
            "_id": "65a6376b512e8a025b5d8415",
            "user": "659d4d3959e95488f68945a7",
            "title": "New Note",
            "description": "This is the new not being added.",
            "tag": "General",
            "date": "2024-01-16T07:59:39.966Z",
            "__v": 0
          },
          {
            "_id": "65a6376b512e8a025b5d8415",
            "user": "659d4d3959e95488f68945a7",
            "title": "New Note",
            "description": "This is the new not being added.",
            "tag": "General",
            "date": "2024-01-16T07:59:39.966Z",
            "__v": 0
          },
          {
            "_id": "65a6376b512e8a025b5d8415",
            "user": "659d4d3959e95488f68945a7",
            "title": "New Note",
            "description": "This is the new not being added.",
            "tag": "General",
            "date": "2024-01-16T07:59:39.966Z",
            "__v": 0
          },
          {
            "_id": "65a6376b512e8a025b5d8415",
            "user": "659d4d3959e95488f68945a7",
            "title": "New Note",
            "description": "This is the new not being added.",
            "tag": "General",
            "date": "2024-01-16T07:59:39.966Z",
            "__v": 0
          }
      ]

      const [notes, setNotes] = useState(allnotes);
    
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;