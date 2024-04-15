import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a new context
const WeatherContext = createContext();

// Create a provider for the context
export const WeatherProvider = ({ children }) => {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState(null);
	const [searchParam, setSearchParam] = useState(null)

	const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

	useEffect(() => {
		
		// const fetchWeatherData = async () => {

		// 	try {
		// 		const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${apiKey}`)
		// 		const res = await req.json()
		// 		setWeatherData(res)
		// 	} catch (error) {
		// 		console.warn(error)
		// 	}
		// }

		// fetchWeatherData()
	}, [])

	console.log(weatherData)

	
	
	// if (weatherData) {
	// 	const {cord, weather, main, wind, timezone, name} = weatherData
	// 	console.log(cord, weather, main, wind, timezone, name)
	// 	console.log(cord)
	// 	console.log(weather)
	// 	console.log(main)
	// 	console.log(wind)
	// 	console.log(timezone)
	// 	console.log(name)
	// }

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, searchParam, setSearchParam }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to consume the context
export const useWeather = () => {
  return useContext(WeatherContext);
};

export default WeatherContext;
