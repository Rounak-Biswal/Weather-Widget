import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import style from "./Search.module.css"

const Search = ({updateWeatherInfo}) => {
    let [city, setCity] = useState("")

    let handleChange = (event) => {
        setCity(event.target.value)
    }
    
    let handleSubmit = async (event) => {
        event.preventDefault()
        console.log(city)
        setCity("")
        let newResult = await getWeather()
        updateWeatherInfo(newResult)
    }

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "02ddb7b14a6895eabd5e92d66d5bc1c5"

    let getWeather = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json()
        let result = {
            city : jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result)
        return result
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className={style.main}>

                <TextField
                    required
                    id="city"
                    label="City Name"
                    variant="outlined"
                    className={style.searchBox}
                    value={city}
                    onChange={handleChange}
                    sx={{ margin: '10px', width: '30%' }} /> <br />
                <Button
                    type='submit'
                    variant="contained"
                    className={style.button}
                    sx={{ width: '30%' }} > Search</Button>

            </form>
        </div >
    )
}

export default Search
