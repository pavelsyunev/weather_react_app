import moment from "moment";
import weatherIcons from "../utils/weatherIcons";

const WeatherForecastDay = ({ forecastDayData }) => {
  //Weather forecast data for component
  const dayTemp = Math.ceil(forecastDayData.main.temp) + " °F" || "No data";
  const dayTempMax =
    Math.ceil(forecastDayData.main.temp_max) + " °F" || "No data";
  const dayTempMin =
    Math.ceil(forecastDayData.main.temp_min) + " °F" || "No data";
  const weekDay =
    moment(forecastDayData.dt_txt.substr(0, 10)).format("dddd") || "No data";
  const weatherIconCode = forecastDayData.weather[0].main || "No data";

  return (
    <div className="flex flex-col m-1 w-1/4 bg-grayDark text-white pb-4">
      <div className="flex justify-center aline-center item-center pt-2 mb-2">
        {weatherIcons(weatherIconCode)}
      </div>
      <div className="text-center">
        <p className="font-normal text-xs">{weekDay}</p>
        <strong className="text-lg">{dayTemp}</strong>
        <p className="text-xs">{weatherIconCode}</p>
        <div className="border-b border-white my-1 w-4/5 mx-auto"></div>
        <p className="text-xs">Max {dayTempMax}</p>
        <p className="text-xs">Min {dayTempMin}</p>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
