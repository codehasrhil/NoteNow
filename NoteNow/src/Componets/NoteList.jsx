import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({Notes , setNotes , handleAddnote , handledeleteNote}) => {
  return (
    <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>

      {Notes.map((note) => (
         <Note  id={note.id} text={note.text} date={note.date}  handledeleteNote={handledeleteNote} />
      ))}

    <AddNote handleAddnote={handleAddnote} />

      {/* <Note />
      <Note />
      <Note />
      <Note /> */}
    </div>
  )
}

export default NoteList
