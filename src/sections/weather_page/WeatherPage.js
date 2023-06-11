import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WeatherPage({ isLoading, isAuthenticated, cityWeather, location }) {
  const navigate = useNavigate();
  let weatherDetailNames = [
    "Date(mm/dd/yyyy)",
    "Temp(F)",
    "Description",
    "Main",
    "Pressure",
    "Humidity",
  ];

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [isLoading, isAuthenticated]);

  return isLoading || !isAuthenticated ? (
    <Text>Loading...</Text>
  ) : (
    <Box
      position="relative"
      display="flex"
      flexDir="column"
      justifyContent="center"
      top="250px"
      w={"80%"}
      margin="auto"
    >
      <Box width="100%" mb="100px" display="flex" justifyContent="center">
        <Text fontSize={[38, 38, 50, 50]} fontWeight="black">
          {location !== "" ? location : "Location"}
        </Text>
      </Box>

      {/* Desktop display all weather details */}
      <Grid
        w="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={6}
        textAlign="center"
        display={["none", "none", "grid", "grid"]}
      >
        {weatherDetailNames.map((name) => {
          return (
            <GridItem key={name} w="100%">
              <Text fontWeight="bold">{name}</Text>
            </GridItem>
          );
        })}

        {Object.keys(cityWeather).map((cityWeatherKey, i) => {
          return (
            <GridItem key={`cityWeather_${i}`} w="100%">
              <Text>{cityWeather[cityWeatherKey]}</Text>
            </GridItem>
          );
        })}
      </Grid>

      {/* Mobile display all weather details */}

      <Grid
        w="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={6}
        textAlign="center"
        display={["grid", "grid", "none", "none"]}
      >
        <GridItem w="100%">
          <Text fontWeight="bold">Date(mm/dd/yyyy)</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">Temperature (F)</Text>
        </GridItem>
        <GridItem w="100%">
          <Text>{cityWeather.date}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text>{cityWeather.temp}</Text>
        </GridItem>
      </Grid>

      <Box width="100%" mt="100px" display="flex" justifyContent="center">
        <Button onClick={() => navigate("/home")}>
          Get Weather From Different City
        </Button>
      </Box>
    </Box>
  );
}

export default WeatherPage;
