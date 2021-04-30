import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherForecast from "../components/WeatherForecast";
import fetchWeatherData from "../utils/fetchWeatherData";

const App = () => {
  const [weather, setWeather] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchWeatherData()
      .then((weatherData) => setWeather(weatherData))
      .then(() => setLoaded(true))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="font-sans w-full mt-16 lg:mt-64 lg:px-20 justify-center container mx-auto">
        <div className="flex flex-wrap w-full lg:w-auto">
          {!loaded ? (
            <Spinner />
          ) : (
            <>
              <div className="w-full lg:w-1/3 flex bg-auto">
                <WeatherCurrent weather={weather} />
              </div>

              <div className="w-full lg:w-2/3 flex ml-0">
                <WeatherForecast weather={weather} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
