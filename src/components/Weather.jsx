import React, { useState, useEffect } from 'react'
import Forecast from './Forecast'
import useFetchWeather from './useFetchWeather'


const Weather = () => {
    const [weatherInfo,fetchWeather] = useFetchWeather()

    console.log(weatherInfo,fetchWeather)


    const formatTime=(time)=>{
        let hours = time/100;
        if(hours === 12){
            return `${hours} pm`
        }
        else if(hours === 0){
            return `12 am`
        }
        else if( hours > 12){
            return `${hours -12} pm`
        }
        else{
            return `${hours} am`
        }
    }

    return (
        <div className='weather-conatiner'>
            <h2>Weather Info</h2>

            <div className="">
                {weatherInfo && (

                    <>
                        <div className="current-info">
                            <h3>
                                Current condition:
                            </h3>
                            <div className="current-temp">
                                <p>Feels like: {weatherInfo.current_condition[0].FeelsLikeC}°C</p>
                                <img src={weatherInfo.current_condition[0].weatherIconUrl[0].value} alt="icon" width="100px" height="100px" />
                            </div>
                            <p>Description: {weatherInfo.current_condition[0].weatherDesc[0].value}</p>
                        </div>

                        {weatherInfo.weather.map((dayInfo)=>(

                        <Forecast dayInfo={dayInfo} getTimeFormatted={formatTime}/>
                        ))}
                        
                    </>
                )}
            </div>

        </div>
    )
}


export default Weather