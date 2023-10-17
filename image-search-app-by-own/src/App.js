import { useEffect, useState } from 'react';
import './App.css';
import CardOverlay from './Components/CardOverlay';
import Cards from './Components/Cards';
import Header from './Components/Header';

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [photos,setPhotos]=useState([]);
  const [pages,setPages]=useState(1);
  const perPage=10;
  
  const [isClick,setIsClick]=useState(false);
  const [search,setSearch]=useState('random');
  const [isImgClick,setIsImgClick]=useState(false)
  const [clickPhoto,setClickPhoto]=useState([])
   
  //to get data from pexel api
  useEffect(()=>{
      getImageFromAPi(`https://api.pexels.com/v1/search?query=${search}&page=${pages}&per_page=${perPage}`)
  },[pages,search])

  const getImageFromAPi=async(url)=>{
    const apiKey='g1rbDfgn5urooqg4Vhxt6H1T2quIiffTtsBE0uMVEK4TMkVt8f1vfNcO';
    setIsLoading(true)
    await fetch(url,{
      headers:{
        Authorization: apiKey
      }
    }).then(res=>res.json())
      .then(data=>isClick ? setPhotos((prev)=>[...prev,...data.photos]):setPhotos([...data.photos]))
      .catch(err=>console.log(err))
      .finally(()=>setIsLoading(false))
  }

   //loodMoreHandler
   const loadMoreHandler=(click)=>{
    if(click){
      setIsClick(click)
      setPages(prev=>prev +1)
    }
  }

  //search handler
  const searchHandler=(sear)=>{
      setIsClick(false)
      setSearch(sear);
  }

  //to get image that we click  
  const imageClickHandler=(id)=>{
    setIsImgClick(true);
    const imageClickPhoto=photos.filter((photo)=>photo.id === id);
    setClickPhoto(imageClickPhoto);
  }

  //to close card overlay
  const closeHandler=()=>{
    setIsImgClick(false)
  }

  return (
    <div className='h-screen w-screen'>
     {isImgClick && <CardOverlay photo={clickPhoto} onClose={closeHandler}/>}
      <div className="">
        <Header onSearch={searchHandler}/>
        <Cards datas={photos} onLoadMore={loadMoreHandler} isLoading={isLoading} onImageClick={imageClickHandler}/>
      </div>
    </div>
  );
}

export default App;

