import React, { useState } from 'react'

const AddNote = ({handleAddnote}) => {
  const [NoteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >=0){
       setNoteText(e.target.value)
    }
    
  }

  const handlesave = () =>{
    if(NoteText.trim().length > 0){
       handleAddnote(NoteText)
       setNoteText("")
    }
    else{
      alert("Please add somthing");
    }
       

  }
  return (
    <div>
      <div className='bg-blue-300  rounded-xl p-[1rem] min-h-44  flex flex-col justify-between font-sans text-xl font-bold '>
        <textarea
          rows={5}
          cols={5}
          placeholder='Type to add a note...'
          value={NoteText}
          className='border-none resize-none outline-0 [scrollbar-width:none]'
          onChange={handleChange}>
        </textarea>
        <div className='flex  items-center justify-between'>
          <small>{characterLimit - NoteText.length} Remainig</small>
          <button className='bg-white text-black pl-3 pr-3 text-[16px] pt-1 pb-1 border-none rounded-2xl hover:bg-pink-200 cursor-pointer' onClick={handlesave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddNote
