import React from 'react';

const Forecast = ({dayInfo,getTimeFormatted}) => {
    return (
        <>
            <h3>Forecast:{ dayInfo.date}</h3>
            <div className="predicted-weather">
                {dayInfo.hourly.map((item) => (
                    <div className="time-wise">
                        <div>
                            <p>Time : {getTimeFormatted(item.time)}</p>
                        </div>

                        <div className="hourly-weather">
                            <div className="">
                                <p>
                                    Feels like: {item.FeelsLikeC}°C
                                </p>
                                <p>
                                    Actual temp: {item.tempC}°C
                                </p>
                            </div>
                            <img src={item.weatherIconUrl[0].value} alt="icon" width="100px" height="100px" />
                        </div>
                        <p>
                            {item.weatherDesc[0].value}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Forecast