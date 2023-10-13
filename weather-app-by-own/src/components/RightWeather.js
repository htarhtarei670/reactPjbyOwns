import SearchBar from './SearchBar'

import moment from 'moment/moment'

const RightWeather = ({data}) => {
    //for time
    const date=new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const checkMins=minutes >=10 ? minutes : `0${minutes}`
    const time=`${hours}:${checkMins}`;
    const dateDay=moment().format('LL');

   //weather data
   const humidity= data !== undefined ? data.main.humidity : 0
   const wind= data !== undefined ? data.wind.deg : 0
   const recub= data !== undefined ? data.weather[0].description : 0

    return (
        <div className="p-4 w-[400px]">
            <SearchBar/>
            <div className="text-center">
                <h1 className=' text-white text-5xl'>
                {time}
                </h1>
                <h1 className=' text-white text-[.9rem] text'>{dateDay}</h1>
            </div>
            <div className="mt-8">
                <h1 className='text-white'>Clouds</h1>
                <div className="flex mt-3 justify-between bg-slate-600 py-2 px-8 rounded-lg">
                    <div className="ps-2 text-white">
                        <span className='text-[.7rem]'>Humidity</span>
                        <p className='text-center'>{humidity}%</p>  
                    </div>
                    <div className="ps-2 text-white">
                        <span className='text-[.7rem]'>Wind Speed</span>
                        <p className='text-center'>{wind}km/h</p>  
                    </div>
                    <div className="ps-2 text-white">
                        <span className='text-[.7rem] text-center'>Estimates</span>
                        <p className='text-center text-[.8rem]'>{recub}</p>  
                    </div>
                    
                </div>
            </div>     
        </div>
  )
}

export default RightWeather
