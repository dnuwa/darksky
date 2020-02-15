import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./app_components/weather_component";
import Form from "./app_components/form_component";

const API_KEY = "341d026e2512b9208f0b0e3e3a7b2ac7";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      timezone: undefined,
      weatherIcon: undefined,
      temperature: undefined,
      summary: undefined,
      error: false
    };
    // this.getWeather();
  }

  getWeather = async e => {
    e.preventDefault();

    const lgt = e.target.elements.longitude.value;
    const ltd = e.target.elements.latitude.value;

    if (lgt && ltd) {
      const api_call = await fetch(
        `https://api.darksky.net/forecast/${API_KEY}/${lgt},${ltd}`
      );
      const response = await api_call.json();
      console.log(response);

      this.setState({
        timezone: response.timezone,
        weatherIcon: response.currently.icon,
        temperature: response.currently.temperature,
        summary: response.currently.summary
      });
    } else {
      this.setState({error:true});
    }
  };

  render() {
    return (
      <div className="App">
        <Form 
        loadweather={this.getWeather}
        error={this.state.error}
        />
        <Weather
          timezone={this.state.timezone}
          weatherIcon={this.state.weatherIcon}
          temperature={this.state.temperature}
          summary={this.state.summary}
        />
      </div>
    );
  }
}

export default App;
