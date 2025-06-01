import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({id,text,date, handledeleteNote}) => {
  return (
    <div className='bg-amber-200  rounded-xl p-[1rem] min-h-44 flex flex-col justify-between font-sans text-lg font-bold whitespace-pre-wrap text-black'>
        <span className='w-full max-w-[400px] break-words overflow-hidden'>{text}</span>
        <div className='flex  items-center justify-between'>
          <small>{date}</small>
          <MdDeleteForever className='delete-icon cursor-pointer' size='1.5em' onClick={()=> handledeleteNote(id)}   />
        </div>
    </div>
  )
}

export default Note
