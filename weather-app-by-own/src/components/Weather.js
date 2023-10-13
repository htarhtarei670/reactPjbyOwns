import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext';

// components
import LeftWeather from './LeftWeather';
import RightWeather from './RightWeather';

const Weather = () => {
    const [data,setData]=useState();

    const ctx=useContext(WeatherContext);
    const search=ctx.search

    useEffect(()=>{
            const getWeatherDateFrom=()=>{
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dcbc79f067a70e778e1ebb19801fed36`)
                .then(res=>setData(res.data))
                .catch(err=>console.log(err))
            }

            getWeatherDateFrom();
    },[search]) 

  return (
    <div className="w-[650px] bg-slate-800 rounded-xl flex overflow-hidden">
        <LeftWeather data={data}/>
        <RightWeather data={data}/>
    </div>
  );
}

export default Weather
