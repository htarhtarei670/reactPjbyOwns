import { useState } from "react";

const Header = ({onSearch,onDark}) => {
  const [userSearch,setUserSearch]=useState('');
  const [dark,setDark]=useState(false);

  const submitHandler=(e)=>{
    e.preventDefault();
    onSearch(userSearch);

    setUserSearch('');
  }

  //for theme
  const darkHandler=()=>{
    setDark(!dark);
    onDark(!dark)
  }

  return (
    <div className="header pt-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-3xl md:text-4xl font-bold pb-4 ${dark ? 'text-white' :''}`}>Note App</h1>
          <span className="rounded-lg pb-2" onClick={darkHandler}>
            <i className={`${dark ? 'ri-moon-fill': 'ri-sun-fill'} text-2xl ${dark ? 'text-white' : 'text-slate-900'} px-2 py-4`}></i>
          </span>
        </div>
        <form action="" onSubmit={submitHandler} className={`${dark ? 'bg-slate-800':'bg-slate-500'} shadow-lg px-3 flex justify-between rounded-xl py-2`}>
            <input value={userSearch} type="text" onChange={(e)=>setUserSearch(e.target.value)} placeholder='Search note...' className='bg-transparent w-full pe-2 border-none outline-none text-white'/>
            <i className="ri-search-2-line text-xl text-white"></i>
        </form>
  </div>
  )
}

export default Header

{/* <i class="ri-sun-fill"></i> */}
