import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import moment from "moment/moment"

// components
import EditOverLay from './components/EditOverLay'
import Header from './components/Header'
import Lists from './components/Lists'
import OverLay from './components/OverLay'
import { useEffect } from 'react';


function App() {
  const [isAddBtnClick,setIsAddBtnClick]=useState(false);
  const [notes,setNotes]=useState([]);
  const [search,setSearch]=useState('');
  const [dark,setDark]=useState(false);

  //to switch theme mode
  document.body.style.backgroundColor= dark ? "#0f172a":"#fdf2f8";


  useEffect(()=>{
    const savedNote=JSON.parse(localStorage.getItem('notes'));

    if(savedNote){
      setNotes(savedNote)
    }
  },[])
  
  const clickHandler=()=>{
    setIsAddBtnClick(true)
  }

  //to get note
  const getNoteData=(data)=>{
    const getNote=[
      ...notes,{
          data:data,
          id:uuidv4(),
          date:moment().format('LLL'),
          isEdit:false
      }
    ]
    setNotes(getNote);
    localStorage.setItem('notes',JSON.stringify(getNote))
  }

  //to edit note
  const editHandler=(id)=>{
    const editNote=notes.map(note=>note.id === id ? {...note,isEdit : !note.isEdit} : note)
    setNotes(editNote);
  }

  //to update note
  const updateHandler=(id,newNote)=>{
    const updateNote=notes.map(note=>note.id === id ? {...note,data:newNote,isEdit:!note.isEdit}:note)
    setNotes(updateNote);
    localStorage.setItem('notes',JSON.stringify(updateNote))
  }

  //to close edit overlay
  const closeEditHandler=(id)=>{
    const closeEdit=notes.map(note=>note.id === id ? {...note,isEdit:!note.isEdit}:note);
    setNotes(closeEdit);
  }

  //to delete note 
  const deleteHandler=(id)=>{
    const deleteNote=notes.filter(note=>note.id !== id);
    setNotes(deleteNote);
    localStorage.setItem('notes',JSON.stringify(deleteNote))
  }

    return ( 
      <div className='w-full'>
        {isAddBtnClick &&
          <OverLay 
            onAddBtnClick={(pra)=>setIsAddBtnClick(pra)}
            onGetNoteData={getNoteData}
            notes={notes}
            dark={dark}
          />
        }

        {
          notes.map((note,index)=> note.isEdit && 
              <EditOverLay 
                note={note} 
                key={index} 
                onUpdate={updateHandler}
                onClose={closeEditHandler}
                dark={dark}
              />)
        }

        <div className="h-screen">
          <div className="mx-3 md:mx-8 lg:mx-52 px-3 sm:px-8">
              <Header 
                onSearch={(pra)=>setSearch(pra)}
                onDark={(pra)=>setDark(pra)}
              />
              <Lists 
                notes={notes.filter(note=>note.data.title.toLowerCase().includes(search)) } 
                onDelete={deleteHandler}
                onEdit={editHandler}
                dark={dark}
              />
            </div>
        </div>

        {/* add btn */}
        <div className="fixed bottom-0 right-4 md:right-24 lg:right-48 cursor-pointer ">
            <button onClick={clickHandler} className={`${dark ?'bg-pink-300' :'bg-slate-900'} rounded-full px-3 py-2 mb-7`}>
                <i className="ri-add-fill text-white text-3xl"></i>
            </button>
        </div>
      </div>
    )
}

// <i class="ri-error-warning-fill"></i>
export default App

// {`${dark? 'bg-slate-950' : 'bg-pink-200'}`}

//