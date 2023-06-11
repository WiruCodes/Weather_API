import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar({ isLoading, isAuthenticated, loginWithRedirect, logout }) {
  return (
    <Box position="fixed" top={0} w={"100%"} h={14} bgColor="red.700">
      <Box
        w={"300px"}
        h="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        right="0"
        mr={6}
      >
        <Link to="/">Landing</Link>
        <Link to="/home">Home</Link>
        <Link to="/weather">Weather</Link>
        <Button
          isLoading={isLoading}
          bgColor="blue.700"
          _hover={{ bg: "blue.500" }}
          size="md"
          onClick={() =>
            !isLoading && isAuthenticated
              ? logout({ logoutParams: { returnTo: window.location.origin } })
              : loginWithRedirect()
          }
        >
          {!isLoading && isAuthenticated ? "Log out" : "Login"}
        </Button>
      </Box>
    </Box>
  );
}

export default NavBar;
