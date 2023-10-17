import React, { useState } from 'react'

const Header = ({onSearch}) => {
  const [input,setInput]=useState('');

  // submit handler for getting search key
  const submitHandler=(e)=>{
    e.preventDefault();

    //to send search input to app parend component
    onSearch(input) 

  }

  return (
    <div className='flex justify-center items-center header h-[400px]'>
      <div className="mx-8">
       <h1 className='md:text-4xl font-bold text-white text-center text-3xl'>Image Searach App</h1>
        <form action="" className='bg-slate-200 px-4 py-2 rounded-md mt-6 md:w-[500px]' onSubmit={submitHandler}>
          <i className="ri-search-2-line text-lg text-slate-500 me-2"></i>
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className='border-none outline-none bg-transparent text-slate-900' placeholder='Search image....'/>
        </form>
      </div>
    </div>
  )
}

export default Header
