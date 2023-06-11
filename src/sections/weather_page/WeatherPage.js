import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WeatherPage({ cityWeather, location }) {
  const navigate = useNavigate();
  let weatherDetailNames = [
    "Date(mm/dd/yyyy)",
    "Temp(F)",
    "Description",
    "Main",
    "Pressure",
    "Humidity",
  ];
  return (
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
        <Text fontSize={[50]} fontWeight='black'>{location !== "" ? location : 'Location'}</Text>
      </Box>
      <Grid
        w="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={6}
        textAlign="center"
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

      <Box width="100%" mt="100px" display="flex" justifyContent="center">
        <Button onClick={() => navigate("/home")}>
          Get Weather From Different City
        </Button>
      </Box>
    </Box>
  );
}

export default WeatherPage;
