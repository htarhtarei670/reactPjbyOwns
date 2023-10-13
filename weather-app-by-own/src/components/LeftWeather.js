import React from 'react'
import cloudy from "../icons/cloudy.svg"
import cloudyNight from "../icons/cloudy-night.svg"
import day from '../icons/day.svg';
import night from '../icons/night.svg';
import perfectDay from "../icons/perfect-day.svg";
import rain from "../icons/rain.svg";
import rainNight from '../icons/rain-night.svg';
import storm from "../icons/storm.svg";
import sunny from '../icons/sunny.svg';


const LeftWeather = ({data}) => {
    //for bg img in order to weather
    const img=data !== undefined ? data.weather[0].main :'random';

    // for temperature change to F to C
   const temp= data !== undefined ? (data.main.temp - 273.15).toFixed(2) : 0;
    const name=data !== undefined ? data.name : "London"
    //weather icons
    const isDay=new Date().getHours() >=12 ? false :true;
    const icons=data !==undefined? data.weather[0].main : "Clear";
    let weatherIcon="";
   
   switch (icons) {
    case "Clouds":weatherIcon =<img src={isDay ? cloudy : cloudyNight} alt="" className='w-[120px]'/>
        break;
    case "Rain" :weatherIcon =<img src={isDay ? rain : rainNight} alt="" className='w-[120px]'/>
        break;
    case "Storm" :weatherIcon =<img src={storm} alt="" className='w-[120px]'/>
        break;
    case "Clear" :weatherIcon =<img src={perfectDay} alt="" className='w-[120px]'/>
        break;
    case "Sunny" :weatherIcon =<img src={sunny} alt="" className='w-[120px]'/>
        break;
    default:weatherIcon =<img src={isDay ? day : night} alt="" className='w-[120px]'/>
        break;
   }

  return (
    <div className="w-[250px] h-[320px] relative">
        <img src={`https://source.unsplash.com/600x900/?${img}`} alt="" className='w-full h-full'/>
        <div className='p-4 flex justify-center items-center'>
            <div className="text-center flex flex-col items-center absolute text-slate-600 top-6 backdrop-blur-sm bg-white/30 py-6 px-10 rounded-lg">
            {weatherIcon}
            <p className='text-4xl mt-8 '>{temp}<span>&deg;C</span></p>
            <h1 className='text-[.9rem]'>Asia/{name}</h1>
            </div> 
        </div>
</div>
  )
}

export default LeftWeather
