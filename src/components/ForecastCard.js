import React from 'react'
import {getTimeFromTimestamp, tmpinCelsius} from './Metric';


const ForecastCard = ({onClickMore, minTemp, maxTemp, weather, icon, timestamp, singleForecast }) => {
    return (
        <article className="dt w-100 bb b--black-05 pb2 mt2 shadow-5">
            <div className="dtc v-mid pl3">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">
                    {getTimeFromTimestamp(timestamp)} 
                </h1>
            </div>
            <div className="dtc w2 w3-ns v-mid">
                <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt="" 
                    className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns bg-light-blue"
                />
                <h1 className="f6 f5-ns fw6 lh-title black mv0">
                    {weather} 
                </h1>
            </div>
        <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">
                {tmpinCelsius(minTemp)}/{tmpinCelsius(maxTemp)} °C
            </h1>
        </div>
        <div className="dtc v-mid">
            <form className="w-100 tr">
                <button 
                    className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                    onClick={() => onClickMore(singleForecast)}  
                > 
                    More 
                </button>
            </form>
        </div>
    </article>
    );
}

export default ForecastCard;