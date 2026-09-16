import { useState, useEffect } from "react";

const useFetchWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchWeather = async () => {
    try {
      setIsFetching(true);
      const response = await fetch("https://wttr.in/?format=j1");
      const data = await response.json();
      setWeatherInfo(data);
    } catch (e) {
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  return [weatherInfo, fetchWeather, isFetching];
};

export default useFetchWeather;
