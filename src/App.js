import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./sections/nav/NavBar";
import WeatherPage from "./sections/weather_page/WeatherPage";
import HomePage from "./sections/home_page/HomePage";
import LandingPage from "./sections/landing_page/LandingPage";
import { useState } from "react";

function App() {
  const [cityWeather, setCityWeather] = useState({
    date: "",
    temp: "",
    description: "",
    main: "",
    pressure: "",
    humidity: "",
  });
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="home"
          element={
            <HomePage
              cityWeather={setCityWeather}
              setCityWeather={setCityWeather}
            />
          }
        />
        <Route path="weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
