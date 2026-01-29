import React from 'react'

function Navbar() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg  fixed'>
        
        <div className="flex justify-between">
        <h2 className='text-2xl cursor-pointer font-bold'>
        Word 
        <span className='text-3xl text-blue-700'>To</span> 
        PDF</h2>
        <h2 className=' text-2xl mt-1 cursor-pointer font-bold hover:scale-110 duration-150'>Home</h2>
        </div>
        
    </div>
    </>
  )
}

export default Navbar