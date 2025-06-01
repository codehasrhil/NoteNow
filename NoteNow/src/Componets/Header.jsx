import React from 'react'

const Header = ({dark,setDark}) => {

  
    const handeldarkbtn = ()  => {
      setDark(!dark)
    }

  return (
    <div className={`flex justify-between items-center top-0  font-black h-15 p-1  fixed  w-[1070px] ${dark ? 'bg-black text-white' : 'bg-white text-black'} `}>
        <h1 className='text-2xl'>NoteNow</h1>
        <button className={`border-3 bg-pink-100 p-2  rounded-2xl cursor-pointer text-black ${dark? 'border-white' : 'border-black'}`}onClick={() => handeldarkbtn()}>Toggle Mode</button>
    </div>
  )
}

export default Header;
