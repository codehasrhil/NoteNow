import React from 'react'
import { MdSearch } from 'react-icons/md';


const Search = ({handleSearchNote , dark}) => {
  return (
    <div className={`flex items-center border-2 rounded-2xl mb-5 mt-20 `}>
      <MdSearch size='2.3em' className='p-2 font-bold'/>
      <input type="text"   autoFocus  placeholder='type to search...' className={`outline-none border-none p-2 text-lg font-bold w-full ${dark? 'placeholder-white' : 'placeholder-black'}`}
          onChange={(e) => handleSearchNote(e.target.value) }/>
    </div>
  )
}

export default Search
