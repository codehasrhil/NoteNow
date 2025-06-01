import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({Notes , setNotes , handleAddnote , handledeleteNote , dark,setdark}) => {
  return (
    <div className={`grid gap-4 grid-cols-[repeat(auto-fit,minmax(330px,1fr))] ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>

      {Notes.map((note) => (
         <Note  id={note.id} text={note.text} date={note.date}  handledeleteNote={handledeleteNote} />
      ))}

    <AddNote handleAddnote={handleAddnote} dark={dark}  />

      {/* <Note />
      <Note />
      <Note />
      <Note /> */}
    </div>
  )
}

export default NoteList
