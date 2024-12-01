import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherData {
  name?: string;
  main?: {
    temp?: number;
    feels_like?: number;
    humidity?: number;
  };
  weather?: {
    description?: string;
    main?: "string";
  }[];
  wind?: {
    speed?: number;
  };
  clouds?: {
    all?: number;
  };
}

const WeatherApp = () => {
  const [data, setData] = useState<WeatherData>({});
  const [location, setLocation] = useState("Budapest");

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e3e3e56afe672aa89c0634143fb82ae5`;

  const searchLocation = (event?: React.KeyboardEvent<HTMLInputElement>) => {
    if (!event || event.key === "Enter") {
      axios.get(weatherURL).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main?.temp?.toFixed()}°C</h1>
          </div>
          <div className="description">
            <p>{data.weather?.[0]?.main}</p>
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              <p className="bold">{data.main?.feels_like?.toFixed()}°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">{data.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{data.wind?.speed?.toFixed()} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
