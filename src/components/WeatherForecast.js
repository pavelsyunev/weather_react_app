import moment from "moment";
import WeatherForecastDay from "../components/WeatherForecastDay";

const WeatherForecast = ({ weather }) => {
  //Weather data for component
  const currentHumidity = weather[0].main.humidity || "No data";
  const currentWind = Math.floor(weather[0].wind.speed) || "No data";
  const maxTemp = Math.floor(weather[0].main.temp_max) + " °F" || "No data";
  const minTemp = Math.floor(weather[0].main.temp_min) + " °F" || "No data";

  //Forecast weather data for 5 days. Loop through forecast weather list and get
  //single dataset for unique date
  const forecastWeatherList = weather[1].list || [];
  let daysData = forecastWeatherList[0].dt_txt.substr(0, 10);
  const forecastDaysArr = [forecastWeatherList[0]];

  for (let i = 0; i < forecastWeatherList.length; i++) {
    if (daysData !== forecastWeatherList[i].dt_txt.substr(0, 10)) {
      forecastDaysArr.push(forecastWeatherList[i]);
      daysData = forecastWeatherList[i].dt_txt.substr(0, 10);
    }
  }

  //If current calendar date equal date from first forecast dataset, we get next 5 datasets,
  //otherwise first 5 datasets
  const forecastFiveDays =
    forecastDaysArr[0].dt_txt.substr(0, 10) === moment().format("YYYY-MM-DD")
      ? forecastDaysArr.slice(1, 6)
      : forecastDaysArr.slice(0, 5);

  //Single forecast day component
  const forecastDay = forecastFiveDays.map((forecastDayData) => {
    return (
      <WeatherForecastDay
        key={forecastDayData.dt_txt}
        forecastDayData={forecastDayData}
      />
    );
  });

  return (
    <div className="m-1 bg-grayLight text-grayMid md:px-4 py-8 w-full">
      <div className="flex justify-between w-64 mb-4 w-full">
        <div className="w-auto uppercase text-90">Max temperature</div>
        <div className="w-auto text-right">{maxTemp}</div>
      </div>
      <div className="flex justify-between w-64 mb-4 w-full">
        <div className="w-auto uppercase text-90">main temperature</div>
        <div className="w-auto text-right">{minTemp}</div>
      </div>
      <div className="flex justify-between w-64 mb-4 w-full">
        <div className="w-auto uppercase text-90">Humidity</div>
        <div className="w-auto text-right">{currentHumidity} %</div>
      </div>
      <div className="flex justify-between w-64 mb-8 w-full">
        <div className="w-auto uppercase text-90">Wind</div>
        <div className="w-auto text-right">{currentWind} Mph</div>
      </div>
      <div className="flex flex-row">{forecastDay}</div>
    </div>
  );
};

export default WeatherForecast;
