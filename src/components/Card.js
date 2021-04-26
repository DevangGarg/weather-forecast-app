import React from 'react'
import {getTimeFromTimestamp, tmpinCelsius} from './Metric';

const Card = ({ name, country, temp, weather, icon, timestamp, humidity, feels_like, cloudiness, wind_speed, pressure, description }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>{name},{country}</h2>
                <p>{getTimeFromTimestamp(timestamp)}</p>
                <h1>{tmpinCelsius(temp)} °C</h1>
                <img 
                    alt='' 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    className="ba center b--black-10 db br-100 w2 w3-ns h2 h3-ns bg-light-blue" 
                />
                <p>{weather}</p>
                <p>Weather Description : &nbsp; {description}</p>
                <p>Temperature Feels Like : &nbsp; {tmpinCelsius(feels_like)} °C</p>
                <p>Humidity : &nbsp; {humidity}%</p>
                <p>Atmospheric Pressure : &nbsp; {pressure}hPa</p>
                <p>Wind Speed : &nbsp; {wind_speed}m/sec</p>
                <p>Cloudiness : &nbsp; {cloudiness}%</p>
            </div>
        </div>
    );
}

export default Card;
