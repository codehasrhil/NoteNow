import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import NoteList from './Componets/NoteList'
import './App.css'

function App() {

  const [Notes,setNotes]  = useState([

  ]);


  const addNote = (text) =>{
      const date = new Date()
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;

      const newNote = {
        id:nanoid(),
        text: text,
        date:formattedDate
      }
      const newNotes = [...Notes,newNote]
      setNotes(newNotes)
  }

  const deleteNote = (id) => {
   const newNotes =   Notes.filter((note)=> note.id !== id);
   setNotes(newNotes);
  }

  return (
    <div className='max-w-[900px] ml-auto mr-auto pr-[15px] pl-[15px]'>
       <NoteList Notes={Notes} setNotes={setNotes} handleAddnote={addNote} handledeleteNote = {deleteNote} />
    </div>
  )
}

export default App
