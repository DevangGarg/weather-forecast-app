import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleForecast from './components/SingleForecast';
import {getTimeFromTimestamp, getTimeOnly, tmpinCelsius} from './components/Metric';

const singleForecast = { 
    dt: 1560350645,
    sunrise: 1560350645,
    sunset: 1560350645,
    temp: {
        day: 303.15,
        min: 303.15,
        max: 303.15,
        night: 303.15,
        eve: 303.15,
        morn: 303.15
    },
    feels_like: {
        day: 303.15,
        night: 303.15,
        eve: 303.15,
        morn: 303.15
    },
    pressure: 1040, 
    humidity: 80,
    wind_speed: 1.5,
    weather: [{
        main: "Clear",
        description: "Clear Sky",
        icon: 8
    }],   
    clouds: 4,
    uvi: 2.31 
};

const onClickClose = () => {
    return "Close";
};

describe('Testing SingleForecast.js', () => {
    beforeEach(() => {
        render(<SingleForecast 
                onClickClose = { onClickClose }
                singleForecast = { singleForecast }
            />);
    })
    it('Renders Time of Forecast', () => {
        expect(screen.getByText(`Forecast of ${getTimeFromTimestamp(singleForecast.dt)}`)).toBeInTheDocument();
    });
    it('Renders Forecasted Weather and its description', () => {
        expect(screen.getByText(`${singleForecast.weather[0].main}`)).toBeInTheDocument();
        expect(screen.getByText(`Weather Description : ${singleForecast.weather[0].description}`)).toBeInTheDocument();
    });
    it('Renders Sunrise and Sunset Time', () => {
        expect(screen.getByText(`Sunrise : ${getTimeOnly(singleForecast.sunrise)} Sunset : ${getTimeOnly(singleForecast.sunset)}`)).toBeInTheDocument();
    });
    it('Renders Temperature Range and Temperature at various Points of Day and what it feels like', () => {
        expect(
            screen.getByText(
                `Min Temp : ${tmpinCelsius(singleForecast.temp.min)}°C Max Temp : ${tmpinCelsius(singleForecast.temp.max)}°C`
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `Morning Temp : ${tmpinCelsius(singleForecast.temp.morn)}°C Feels Like : ${tmpinCelsius(singleForecast.feels_like.morn)}°C`
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `Day Temp : ${tmpinCelsius(singleForecast.temp.day)}°C Feels Like : ${tmpinCelsius(singleForecast.feels_like.day)}°C`
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `Evening Temp : ${tmpinCelsius(singleForecast.temp.eve)}°C Feels Like : ${tmpinCelsius(singleForecast.feels_like.eve)}°C`
                )
            ).toBeInTheDocument();
        expect(
            screen.getByText(
                `Night Temp : ${tmpinCelsius(singleForecast.temp.night)}°C Feels Like : ${tmpinCelsius(singleForecast.feels_like.night)}°C`
                )
            ).toBeInTheDocument();
    });
    it('Renders Humidity, Wind Speed, Atmospheric Pressure, UV Index and Cloudiness', () => {
        expect(screen.getByText(`Humidity : ${singleForecast.humidity}%`)).toBeInTheDocument();
        expect(screen.getByText(`Wind Speed : ${singleForecast.wind_speed}m/sec`)).toBeInTheDocument();
        expect(screen.getByText(`Atmospheric Pressure : ${singleForecast.pressure}hPa`)).toBeInTheDocument();
        expect(screen.getByText(`UV Index : ${singleForecast.uvi}`)).toBeInTheDocument();
        expect(screen.getByText(`Cloudiness : ${singleForecast.clouds}%`)).toBeInTheDocument();
    });
});