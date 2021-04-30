import moment from "moment";
import weatherIcons from "../utils/weatherIcons";

const WeatherCurrent = ({ weather }) => {
  //Weather data for component
  const cityName = weather[0].name || "No data";
  const countryName = weather[0].sys.country || "No data";
  const currentTemp = Math.ceil(weather[0].main.temp) + " °F" || "No data";
  const currentTempFeelsLike =
    Math.ceil(weather[0].main.feels_like) + " °F" || "No data";
  const currentDescription =
    weather[0].weather[0].description.charAt(0).toUpperCase() +
      weather[0].weather[0].description.slice(1) || "No data";
  const currentWeekday =
    moment.unix(weather[0].dt).local().format("dddd") || "No data";
  const currentDate =
    moment.unix(weather[0].dt).local().format("MMM Do YY") || "No data";
  const weatherIconCode = weather[0].weather[0].main || "No data";

  return (
    <div className="m-1 py-6 pl-8 pr-8 w-full bg-orange opacity-90 text-white">
      <div className="mb-20">
        <h2 className="font-bold text-3xl leading-none pb-1">
          {currentWeekday}
        </h2>
        <h3 className="leading-none pb-2 pl-1">{currentDate}</h3>
        <p className="flex aling-center opacity-75">
          <svg
            className="w-4 inline mr-1"
            id="Capa_1"
            style={{ enableBackground: "new 0 0 425.963 425.963" }}
            version="1.1"
            viewBox="0 0 425.963 425.963"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            xmlSpace="preserve"
          >
            <g />
            <path
              className="active-path"
              d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
              fill="#FFFFFF"
              data-original="#000000"
              data-old_color="#000000"
            />
          </svg>
          {`${cityName} ${countryName}`}
        </p>
      </div>
      <div>
        {weatherIcons(weatherIconCode, "w-24 h-24")}
        <strong className="leading-none text-6xl block font-weight-bolder">
          {currentTemp}
        </strong>
        <p>Feels like {currentTempFeelsLike}</p>
        <p className="text-2xl block font-bold">{currentDescription}</p>
      </div>
    </div>
  );
};

export default WeatherCurrent;
