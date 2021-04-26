import React from 'react';
import ForecastCard from './ForecastCard';
const ForecastList = ({onClickMore, cityForecast }) => {
    return (
        <div className="mw6 center bg-washed-blue br3 pa2">
            <h1 className = 'f1 blue'>Eight Days Weather Forecast</h1>
        {
            cityForecast.map((cityForecast,ind) => <ForecastCard 
                key={ind}
                minTemp = {cityForecast.temp.min}
                maxTemp = {cityForecast.temp.max}
                weather = {cityForecast.weather[0].main}
                icon = {cityForecast.weather[0].icon}
                timestamp = { cityForecast.dt }
                singleForecast = { cityForecast }
                onClickMore = {onClickMore}
                />
            )
        }
        </div>
    );
}
export default ForecastList;