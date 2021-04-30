//Icons from react-icon library - https://react-icons.github.io/react-icons/search?q=weather
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindy,
} from "react-icons/ti";

//Set icon depends on weather condition
const weatherIcons = (iconCode, iconSize = "w-12 h-12") => {
  switch (iconCode) {
    case "Thunderstorm":
      return <TiWeatherStormy className={iconSize} />;
    case "Drizzle":
      return <TiWeatherShower className={iconSize} />;
    case "Rain":
      return <TiWeatherDownpour className={iconSize} />;
    case "Snow":
      return <TiWeatherSnow className={iconSize} />;
    case "Clear":
      return <TiWeatherSunny className={iconSize} />;
    case "Clouds":
      return <TiWeatherCloudy className={iconSize} />;
    default:
      return <TiWeatherWindy className={iconSize} />;
  }
};

export default weatherIcons;
