import React from 'react';
import Card from './Card';
const CardList = ({ cityWeather }) => {
    return (

        <Card 
            temp = {cityWeather.main.temp}
            feels_like = {cityWeather.main.feels_like}
            weather = {cityWeather.weather[0].main}
            description = {cityWeather.weather[0].description}
            country = {cityWeather.sys.country}
            name = {cityWeather.name}
            icon = {cityWeather.weather[0].icon}
            timestamp = { cityWeather.dt }
            humidity = {cityWeather.main.humidity}
            pressure = {cityWeather.main.pressure}
            cloudiness = {cityWeather.clouds.all}
            wind_speed = {cityWeather.wind.speed} 
        />
    );
}
export default CardList;