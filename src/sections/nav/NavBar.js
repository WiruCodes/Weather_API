import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
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
        <Button bgColor="blue.700" size="md">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default NavBar;
