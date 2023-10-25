import { useState } from "react";


const OverLay = ({onAddBtnClick,onGetNoteData,notes,dark}) => {
  const [title,setTitle]=useState('');
  const [text,setText]=useState('');

  const data={title,text}


  const submitHandler=(e)=>{
    e.preventDefault();
    //to get data that user write
    onGetNoteData(data)

    //to hide overlay
    onAddBtnClick(false)
  }

  return (
    <div className=" fixed bg-slate-900/70 flex justify-center items-center w-screen z-10 h-screen">
      <div className={`${dark ? 'bg-slate-900':'bg-pink-50'} px-4 shadow-2xl py-2 w-[350px] md:w-[450px] min-h-[350px] md:min-h-[450px] rounded-lg`}>
          <form action="" onSubmit={submitHandler}>
            <div className="flex justify-between cursor-pointer pb-6">
              <i className="ri-close-line text-2xl text-slate-500" onClick={()=>onAddBtnClick(false)}></i> 
              <button type="submit" className="text-blue-600">Save</button>
            </div>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" className={`bg-transparent text-2xl ${dark ? 'text-white':''} ${dark ? 'placeholder:text-white':'placeholder:text-black'} font-semibold  border-none outline-none w-full h-full mb-3`}/>
            <textarea onChange={(e)=>setText(e.target.value)} className={`bg-transparent ${dark ?'text-white':''} placeholder:text-slate-white w-full ps-1 border-none outline-none resize-none"`} cols="37" rows="12" placeholder="Note"></textarea>
          </form>
      </div>
    </div>
  )
}

export default OverLay
