import React,{useState,useEffect} from 'react'

const useFetchWeather=()=>{
        const [weatherInfo, setWeatherInfo] = useState(null)

             const fetchWeather = async () => {
                const response = await fetch("https://wttr.in/?format=j1")
                const data = await response.json()
                setWeatherInfo(data)
            }
    
        useEffect(() => {
          fetchWeather()
        }, [])
        return [weatherInfo,fetchWeather]
    }

    export default useFetchWeather