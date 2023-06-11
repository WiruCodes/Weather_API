import { Box, Button, Text } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Box position='relative' display='flex' flexDir='column' justifyContent='center' alignItems='center' top='250px'>
      <Box w='50%' display='flex' flexDir='column' alignItems='center'>
      <Text  fontSize={20} fontWeight='semibold' textAlign='center'>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</Text>
      <Button w='80%' mt={10} bgColor='blue.700' _hover={{ bg: 'blue.500' }}>Login</Button>
      </Box>
    </Box>
  )
}

export default LandingPage;