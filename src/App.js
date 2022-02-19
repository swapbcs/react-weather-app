import { useState } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import TextBox from "./components/TextBox/TextBox";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const getWeatherData = async (city) => {
    console.log("Getting weather data for", city);
    let result;
    if (city.length === 0) {
      result = {};
    } else {
      let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37b87c78bdf022c05746b10356b1d47e&units=metric`;
      const weatherInfo = await axios.get(weatherApiUrl);
      result = {
        temp: weatherInfo.data.main.temp,
        min: weatherInfo.data.main.temp_min,
        max: weatherInfo.data.main.temp_max,
      };
    }
    setData(result);
  };

  return (
    <div className="App flex-col">
      <TextBox getWeatherData={getWeatherData} />
      <Info data={data} />
    </div>
  );
}

export default App;
