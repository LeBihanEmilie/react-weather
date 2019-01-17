import React, { Component } from 'react';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: "ddb60ade3c57c2ae9f4de0de42abcdcc",
      temp: 0,
      windspeed: 0,
      name: "",
      icon: "",
      iconDescrib:"",
      humidity: 0

    }
  }

  getWeather = (position) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${this.state.apiKey}`)
    .then(response => response.json())
    .then((data) => {
      this.setState({name: data.name, humidity: data.main.humidity,temp: data.main.temp, windspeed: data.wind.speed, icon: data.weather[0].icon, iconDescrib: data.weather[0].description });
    })
  }

  componentDidMount = () => { 
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeather);
    } else {
      console.log("error no geolocalisation")
    }
  }
  render = () => {
    return (
      <div>
      <h2>{this.state.name}</h2>
      <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.iconDescrib} />
      <p>{Math.floor(this.state.temp)} °C</p>
      <p>{this.state.humidity}%</p>
      <p>{this.state.windspeed}m/s</p>
      </div>
    )
  }

}

export default Weather;