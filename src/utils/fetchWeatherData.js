const fetchWeatherData = async () => {
  // Get user location - API geolocation-db.com
  //Can't work if user use any add block in a browser
  const locationData = await fetch(
    "https://geolocation-db.com/json/56a44b30-a71d-11eb-8c73-0f972c34e9c0"
  );
  const { city } = await locationData.json();

  //If user location is not foud, we pass default location - New York
  const location = city === "Not found" ? "New York" : city;

  //Get current weather based on user location - API openweathermap.org
  const weatherDataCurrent = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f856e155f5c5001294552aa4b040bd9d`
  );
  const weatherCurrent = await weatherDataCurrent.json();

  // Get weather forecast based on user location - API openweathermap.org
  const weatherDataForecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=f856e155f5c5001294552aa4b040bd9d`
  );
  const weatherForecast = await weatherDataForecast.json();

  return Promise.all([weatherCurrent, weatherForecast]);
};

export default fetchWeatherData;
