import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getWeatherDetails } from "../../library/weather/weatherFunctionLibrary";

function HomePage({ setCityWeather, setLocation }) {
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
      <Box mb='100px'><Text fontSize={[36, 36, 50, 50]} fontWeight='black' textAlign='center'>Search Weather For A City</Text></Box>
      <Box display="flex" alignItems="center">
        <Input
          onChange={(e) => {
            setCity(e.target.value);
            setCityError(false);
          }}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              getWeatherDetails(
                setCity,
                city,
                setCityError,
                setCityWeather,
                setLocation,
                navigate
              )
            }
          }}
          w="300px"
          mr="5"
          textAlign='center'
          value={city}
        />
        <Button
          onClick={() =>
            getWeatherDetails(
              setCity,
              city,
              setCityError,
              setCityWeather,
              setLocation,
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
