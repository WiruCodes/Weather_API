import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LandingPage({ loginWithRedirect, isLoading, isAuthenticated }) {
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      top="250px"
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isAuthenticated ? (
        <Box w="50%" display="flex" flexDir="column" alignItems="center">
          <Text fontSize={20} fontWeight="semibold" textAlign="center">
            You're Logged in! Enjoy browsing weather through different cities!
          </Text>
          <Button
            w="80%"
            mt={10}
            bgColor="red.700"
            _hover={{ bg: "red.500" }}
            onClick={() => navigate('home')}
          >
            Get Weather
          </Button>
        </Box>
      ) : (
        <Box w="50%" display="flex" flexDir="column" alignItems="center">
          <Text fontSize={20} fontWeight="semibold" textAlign="center">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view the weather in your
            city.
          </Text>
          <Button
            w="80%"
            mt={10}
            bgColor="blue.700"
            _hover={{ bg: "blue.500" }}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default LandingPage;
