import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import cityInfo from './city_list.json';
import ForecastList from '../components/ForecastList';
import SingleForecast from '../components/SingleForecast';

const API_KEY = "d0a185769a9e306179a37b296ce8a6f1";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cityList: cityInfo,
            id: null,
            cityWeather: {},
            cityForecast: [],
            searchfield: '',
            options: [],
            message: "City Searching",
            singleForecast: {},
        }
    }
    onSubmit = () => {
        if(this.state.id !== null)
        {
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(city => this.setState({cityWeather: city, cityForecast: [], singleForecast: {}}))
            .catch(err => console.log("Unable to use API"));
        }
        else
        {
            this.setState({message: "City Not Found"});
        }

    }

    getForecast = () => {
        const { cityWeather } = this.state;
        const {lat, lon} = cityWeather.coord;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(city => this.setState({cityForecast: city.daily, singleForecast: {}}))
            .catch(err => console.log("Unable to use API"));
    }

    onClickMore = (singleForecast) => {
        this.setState({singleForecast: singleForecast});
    }

    onClickClose = () => {
        this.setState({singleForecast: {}});
    }

    onSearchChange = (event) => {
        let option = this.state.cityList.filter(city =>  
            city.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        );
        option = option.slice(0,Math.min(10,option.length));
        let id = null;
        for(let i = 0; i < option.length; i++)
        {
            if(option[i].name.toLowerCase() === event.target.value.toLowerCase())
            {
                id = option[i].id;
                break;
            }
        }
        this.setState({
            options: option,
            searchfield: event.target.value,
            id: id,
            cityForecast: [],
            cityWeather: {},
            message: "City Searching",
            singleForecast: {}
        });
    }
    render() {
        const { searchfield, cityWeather, cityForecast, message } = this.state;
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>Weather Forecasting</h1>
                <SearchBox searchChange = {this.onSearchChange} options = {this.state.options} onSubmit = {this.onSubmit}/>
                {
                    JSON.stringify(cityWeather) === '{}'
                    ? <h1 className = 'f1'>{ searchfield } {message}</h1>
                    : <div>
                        <h1> Current Weather </h1>
                        <CardList cityWeather = { cityWeather } className="db"/>
                        {
                            JSON.stringify(cityForecast) === '[]'
                            ? <button 
                                className='w-30 grow f4 link center ph3 pv2 db white bg-red' 
                                onClick={this.getForecast}
                            >
                            Check Forecast
                            </button>
                            : <div>
                                {
                                    JSON.stringify(this.state.singleForecast) === '{}'
                                    ? <ForecastList cityForecast = { cityForecast } onClickMore = {this.onClickMore}/>
                                    : <div>
                                        <SingleForecast singleForecast = { this.state.singleForecast} onClickClose = {this.onClickClose} />
                                    </div>
                                }   
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}
export default App;
