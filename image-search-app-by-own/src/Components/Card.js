import React, { useState } from 'react'
import { saveAs } from 'file-saver';

const Card = ({data,onImageClick}) => {
  const [isHover,setIsHover]=useState(false);

  //onHover
  const onHover=(e)=>{
    e.preventDefault();
    setIsHover(true)
  
  }

  //onHoverOver function
  const onHoverOver=(e)=>{
    e.preventDefault();
    setIsHover(false)
  }

  // when we click image
  const clickImageHandler=()=>{
    onImageClick(data.id);
  }

  //to save img from ur website on ur pc
  const imgDownloadHandler=()=>{
    saveAs(data.src.original,'image.jpg')
  }
  
  return (
    <li className='rounded-xl relative h-auto' onMouseEnter={onHover} onMouseLeave={onHoverOver}>
      <img src={data.src.original} alt="" className='w-full' onClick={clickImageHandler}/>
      <div className={isHover ? "" : "hidden"}>
        <div className="justify-between flex transition">
          <div className="absolute bottom-3 left-4 text-white">
            <i className="ri-camera-line text-lg"></i>
            <span className='ps-2 text-[.9rem]'>{data.photographer}</span>
          </div>
          <div className="absolute bottom-3 right-4 bg-purple-500 text-white px-2 rounded-md" onClick={imgDownloadHandler}>
            <i className="ri-download-2-line text-lg"></i>
          </div>
        </div>
      </div>
    </li>

  )
}

export default Card
