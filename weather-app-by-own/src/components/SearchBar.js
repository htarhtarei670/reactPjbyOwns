import React, { useContext, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const SearchBar = ({onSearch}) => {
    const [input,setInput]=useState('')
    const {search,setSearch}=useContext(WeatherContext)

    const submitHandler=(e)=>{
        e.preventDefault()
        setSearch(input)

        setInput('')
    }

  return (
    <div className="mb-8 mx-16 mt-2">
        <form action="" className='px-4 py-2 rounded-lg bg-slate-600 flex' onSubmit={submitHandler}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='outline-none border-none bg-transparent text-white' placeholder='Enter location'/>
            <button className='me-8 w-4'>
                <i className="ri-search-line text-white"></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar
