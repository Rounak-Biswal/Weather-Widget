import Search from '../Search/Search';
import InfoBox from '../InfoBox/InfoBox';
import React, { useState } from 'react'

import "./WeatherApp.module.css"

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    "city": "Bhubaneswar",
    "feels_like": 33.68,
    "humidity": 94,
    "pressure": 1003,
    "temp": 27.77,
    "tempMax": 27.77,
    "tempMin": 27.77,
    "weather": "overcast clouds"
  })

  let updateWeatherInfo = (result) => {
    setWeatherInfo(result)
  }

  return (
    <div>
      <h1>Weather App by Rounak</h1>
      <Search updateWeatherInfo={updateWeatherInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  )
}

export default WeatherApp
