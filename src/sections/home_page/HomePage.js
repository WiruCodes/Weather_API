import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getWeatherDetails } from "../../library/weather/weatherFunctionLibrary";

function HomePage({ cityWeather, setCityWeather }) {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);

  return (
    <Box
      position="relative"
      display="flex"
      flexDir="column"
      alignItems="center"
      top="250px"
    >
      <Box display="flex" alignItems="center">
        <Input
          onChange={(e) => {
            setCity(e.target.value);
            setCityError(false);
          }}
          w="200px"
          mr="5"
          value={city}
        />
        <Button
          onClick={() =>
            getWeatherDetails(
              setCity,
              city,
              setCityError,
              setCityWeather,
              navigate
            )
          }
          size="md"
        >
          Enter
        </Button>
      </Box>
      {cityError && (
        <Box display="flex">
          <Text mt={3}>Please input an existing city.</Text>
        </Box>
      )}
    </Box>
  );
}

export default HomePage;
