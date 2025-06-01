import React, { useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import NoteList from './Componets/NoteList'
import './App.css'
import Header from './Componets/Header'
import Search from './Componets/search';

function App() {
  
  const [searchText , setSearchText] = useState('');
  const [dark , setdark] = useState(false);



 const [Notes, setNotes] = useState(() => {
     const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
     return savedNotes || [];
});



  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(Notes));
    console.log('notes svaed',Notes);
  }, [Notes]);


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

 useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [dark]);
  
  return (
    <div className={`ml-auto mr-auto pr-[15px] pl-[15px] ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}  style={{ maxWidth: '1100px' }}>
       <Header dark={dark} setDark={setdark} />
       <Search handleSearchNote={setSearchText} dark={dark} setDark={setdark}/>
       <NoteList Notes={Notes.filter((note) => note.text.toLowerCase().includes(searchText))} dark={dark} setDark={setdark} setNotes={setNotes} handleAddnote={addNote} handledeleteNote = {deleteNote} />
    </div>
  )
}

export default App
