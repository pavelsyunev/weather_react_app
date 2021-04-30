// import { render, screen } from "@testing-library/react";
import App from "./App";
import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";
import WeatherForecastDay from "./components/WeatherForecastDay";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
