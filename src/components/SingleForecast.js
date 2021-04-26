import React from 'react'
import {getTimeFromTimestamp, getTimeOnly, tmpinCelsius} from './Metric';


const SingleForecast = ({onClickClose, singleForecast }) => {
    return (
            <div className='tc bg-blue dib br3 pa3 ma2 bw2 shadow-5'>
                <h2>Forecast of {getTimeFromTimestamp(singleForecast.dt)} </h2>
                <img 
                    src={`https://openweathermap.org/img/wn/${singleForecast.weather[0].icon}@2x.png`} 
                    alt="" 
                    className="center ba b--black-10 db br-100 w2 w3-ns h2 h3-ns bg-light-blue"
                />
                <h1>{singleForecast.weather[0].main} </h1>
                <h1>Weather Description : &nbsp; {singleForecast.weather[0].description} </h1>
                <h1>Sunrise : &nbsp;{getTimeOnly(singleForecast.sunrise)} &nbsp; Sunset : &nbsp;{getTimeOnly(singleForecast.sunset)}</h1>
                <h1>Min Temp : &nbsp;{tmpinCelsius(singleForecast.temp.min)}°C &nbsp; Max Temp : &nbsp;{tmpinCelsius(singleForecast.temp.max)}°C</h1>
                <h1>Morning Temp : &nbsp;{tmpinCelsius(singleForecast.temp.morn)}°C &nbsp; Feels Like : &nbsp;{tmpinCelsius(singleForecast.feels_like.morn)}°C</h1>
                <h1>Day Temp : &nbsp;{tmpinCelsius(singleForecast.temp.day)}°C &nbsp; Feels Like : &nbsp;{tmpinCelsius(singleForecast.feels_like.day)}°C</h1>
                <h1>Evening Temp : &nbsp;{tmpinCelsius(singleForecast.temp.eve)}°C &nbsp; Feels Like : &nbsp;{tmpinCelsius(singleForecast.feels_like.eve)}°C</h1>
                <h1>Night Temp : &nbsp;{tmpinCelsius(singleForecast.temp.night)}°C &nbsp; Feels Like : &nbsp;{tmpinCelsius(singleForecast.feels_like.night)}°C</h1>
                <h1>Humidity : &nbsp;{singleForecast.humidity}%</h1>
                <h1>Wind Speed : &nbsp;{singleForecast.wind_speed}m/sec </h1>
                <h1>UV Index : &nbsp;{singleForecast.uvi}</h1>
                <h1>Cloudiness : &nbsp;{singleForecast.clouds}%</h1>
                <h1>Atmospheric Pressure : &nbsp;{singleForecast.pressure}hPa</h1>
                <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-red' 
                    onClick={() => onClickClose(singleForecast)}
                >
                    Close
                </button>
            </div>
    );
}

export default SingleForecast;



