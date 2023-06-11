import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./sections/nav/NavBar";
import WeatherPage from "./sections/weather_page/WeatherPage";
import HomePage from "./sections/home_page/HomePage";
import LandingPage from "./sections/landing_page/LandingPage";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [cityWeather, setCityWeather] = useState({
    date: "date",
    temp: "temp",
    description: "desc",
    main: "main",
    pressure: "pressure",
    humidity: "humidity",
  });
  const [location, setLocation] = useState("");
  const [userData, setUserData] = useState({});

  const { loginWithRedirect, isAuthenticated, isLoading, user, logout } =
    useAuth0();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      setUserData({
        name: user.nickname,
        accountLink: `https://github.com/${user.nickname}`,
      });
    }
  }, [isLoading]);

  return (
    <BrowserRouter>
      <NavBar
        isLoading={isLoading}
        isAuthenticated={isAuthenticated}
        loginWithRedirect={loginWithRedirect}
        logout={logout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              loginWithRedirect={loginWithRedirect}
              isLoading={isLoading}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="home"
          element={
            <HomePage
              isLoading={isLoading}
              isAuthenticated={isAuthenticated}
              setCityWeather={setCityWeather}
              setLocation={setLocation}
              userData={userData}
            />
          }
        />
        <Route
          path="weather"
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
          element={
            <WeatherPage
              isLoading={isLoading}
              isAuthenticated={isAuthenticated}
              cityWeather={cityWeather}
              location={location}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
