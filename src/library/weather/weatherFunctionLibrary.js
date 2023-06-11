import { getWeatherConfig } from "../../config";

export function getWeatherDetails(
  setCity,
  city,
  setCityError,
  setCityWeather,
  setLocation,
  navigate
) {
  let apiKey = getWeatherConfig();
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${apiKey}`
  )
    .then((cityResponse) => cityResponse.json())
    .then((cityJson) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityJson[0].lat}&lon=${cityJson[0].lon}&appid=${apiKey}`
      )
        .then((weatherResponse) => weatherResponse.json())
        .then((weatherJson) => {
          let date = new Date(weatherJson.dt * 1000);
          date = date.toLocaleDateString();

          setCityWeather({
            date: date,
            temp: weatherJson.main.temp,
            description: weatherJson.weather[0].description,
            main: weatherJson.weather[0].main,
            pressure: weatherJson.main.pressure,
            humidity: weatherJson.main.humidity,
          });
          setLocation(weatherJson.name);
          setCity("");
          console.log(weatherJson);
          navigate("/weather");
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log(error);
      setCity("");
      setCityError(true);
    });
}
