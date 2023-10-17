import React from 'react'
import { saveAs } from 'file-saver'

const CardOverlay = ({photo,onClose}) => {
    
    const clickCloseHandler=()=>{
        onClose(false)
    }

    const imgDownloadHandler=()=>{
        //saveAs(imgUrl,saveName)
        saveAs(photo[0].src.original,"image.jpg")
    }

    return (
        <div className='fixed z-30 w-full h-full flex justify-center items-center bg-slate-900/70'>
            <div className="w-[600px] max-h-[700px] bg-white py-3 px-5 rounded-lg mx-8">
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <i className="ri-camera-line text-lg"></i>
                        <span className='ps-2 text-[.9rem]'>{photo[0].photographer}</span>
                    </div>
                    <div className="text-white">
                        <span className=" bg-purple-500 py-1 me-2 px-2 rounded-md" onClick={imgDownloadHandler}>
                            <i className="ri-download-2-line text-lg"></i>
                        </span> 
                        <span className="bg-purple-500 py-1 me-2 px-2 rounded-md" onClick={clickCloseHandler}>
                            <i className="ri-close-fill text-lg"></i>
                        </span>        
                    </div>
                </div>
                <div className="flex justify-center mb-8 mt-8">
                    <img src={photo[0].src.original} className='w-2/3 max-h-[550px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardOverlay
