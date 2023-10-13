import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import { WeatherContext } from './context/WeatherContext';

function App() {
  const [search,setSearch]=useState("London");
  const value={search,setSearch}
  
  return (
    <div className="container flex justify-center items-center h-screen w-screen">
     <WeatherContext.Provider value={value}>
        <Weather/>
     </WeatherContext.Provider>
    </div>
  );
}

export default App;
