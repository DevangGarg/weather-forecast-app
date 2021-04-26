import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './components/Card';
import {getTimeFromTimestamp, tmpinCelsius} from './components/Metric';

const cityWeather = {
    name: "Delhi",
    country:"IN", 
    temp: 303.15, 
    weather: "Clear", 
    icon: 8, 
    timestamp: 1560350645, 
    humidity: 80, 
    feels_like: 302.15, 
    cloudiness: 4, 
    wind_speed: 1.5, 
    pressure: 1040, 
    description: "Clear Sky"
};

describe('Testing Card.js', () => {
    beforeEach(() => {
        render(<Card 
                name={cityWeather.name}
                country={cityWeather.country}
                temp={cityWeather.temp}
                weather={cityWeather.weather}
                icon={cityWeather.icon}
                timestamp={cityWeather.timestamp}
                humidity={cityWeather.humidity}
                feels_like={cityWeather.feels_like}
                cloudiness={cityWeather.cloudiness}
                wind_speed={cityWeather.wind_speed}
                pressure={cityWeather.pressure}
                description={cityWeather.description}
            />);
    })
    it('Renders City and Country Name', () => {
        expect(screen.getByText(`${cityWeather.name},${cityWeather.country}`)).toBeInTheDocument();
      });
    it('Renders Current Time', () => {
        expect(screen.getByText(`${getTimeFromTimestamp(cityWeather.timestamp)}`)).toBeInTheDocument();
    });
    it('Renders Current Temperature and what it feels like', () => {
        expect(screen.getByText(`${tmpinCelsius(cityWeather.temp)} °C`)).toBeInTheDocument();
        expect(screen.getByText(`Temperature Feels Like : ${tmpinCelsius(cityWeather.feels_like)} °C`)).toBeInTheDocument();
    });
    it('Renders Current Weather and its description', () => {
        expect(screen.getByText(`${cityWeather.weather}`)).toBeInTheDocument();
        expect(screen.getByText(`Weather Description : ${cityWeather.description}`)).toBeInTheDocument();
    });
    it('Renders Humidity, Wind Speed, Atmospheric Pressure and Cloudiness', () => {
        expect(screen.getByText(`Humidity : ${cityWeather.humidity}%`)).toBeInTheDocument();
        expect(screen.getByText(`Wind Speed : ${cityWeather.wind_speed}m/sec`)).toBeInTheDocument();
        expect(screen.getByText(`Atmospheric Pressure : ${cityWeather.pressure}hPa`)).toBeInTheDocument();
        expect(screen.getByText(`Cloudiness : ${cityWeather.cloudiness}%`)).toBeInTheDocument();
    });
});
