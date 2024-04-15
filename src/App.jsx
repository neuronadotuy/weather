import React, { useState } from 'react';
import { WeatherProvider, useWeather } from './context/WeatherContext';
import cities from '../city.list.json'; 

function App() {
  const { searchParam, setSearchParam } = useWeather();
  const [citiesList, setCitiesList] = useState([])
  const [countriesList, setCountriesList] = useState([])

  

  const handleSearch = (e) => {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  
    const capitalizeEachWord = (string) => {
      return string.split(' ').map(capitalizeFirstLetter).join(' ');
    };
  
    const filteredCities = cities.filter(city => {
      if (e.target.value.length >= 3) {
        const inputValue = capitalizeEachWord(e.target.value.toLowerCase());
        const cityName = capitalizeEachWord(city.name.toLowerCase());
        return cityName.includes(inputValue);
      }
    });

    const filteredCountries = countries.filter(country => {
      if (e.target.value.length >= 3) {
        const inputValue = capitalizeEachWord(e.target.value.toLowerCase());
        const countryName = capitalizeEachWord(country.name.toLowerCase());
        return countryName.includes(inputValue);
      }
    });
  
    setCitiesList(filteredCities);
    console.log(filteredCountries);
  };

  return (
    <div className="App">
      <input type="search" name="search" id="" onChange={handleSearch}/>
      <ul>
        {citiesList?.map(city => {
          return <li key={city.id}>{city.name}, {city.country}</li>
        })}
      </ul>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  );
}
