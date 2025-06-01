import React from 'react'

const Header = ({ dark, setDark }) => {


  const handeldarkbtn = () => {
    setDark(!dark)
  }

  return (

    <header className={`fixed top-0 left-0 w-full ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4 w-full text-lg font-bold " style={{ maxWidth: '1100px' }}>
        <h1 className="text-2xl font-black">NoteNow</h1>
        <button
          className={`border-2 bg-pink-100 p-2 rounded-2xl cursor-pointer text-black ${dark ? 'border-white' : 'border-black'}`}
          onClick={handeldarkbtn}
        >
          Toggle Mode
        </button>
      </div>
    </header>

  )
}

export default Header;
