import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar({ isLoading, isAuthenticated, loginWithRedirect, logout }) {
  return (
    <Box position="fixed" top={0} w={"100%"} h={14} bgColor="red.700">
      <Text
        h="100%"
        display={["none", "none", "flex", "flex"]}
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left="0"
        ml={6}
        fontSize={32}
        fontWeight="black"
      >
        Weather Generator
      </Text>
      <Box
        w={["80%", "80%", "300px", "300px"]}
        h="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        right="0"
        mr={[6, 6, 6, 6]}
        ml={[6, 6, 0, 0]}
      >
        <Link to="/">
          <Text fontWeight="bold">Landing</Text>
        </Link>
        <Link to="/home">
          <Text fontWeight="bold">Home</Text>
        </Link>
        <Link to="/weather">
          <Text fontWeight="bold">Weather</Text>
        </Link>
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
