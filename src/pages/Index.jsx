import { Container, Text, VStack, Box, Flex, Spacer, Button, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md" mb={4}>
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" color="white" _hover={{ bg: "blue.600" }} mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" color="white" _hover={{ bg: "blue.600" }}>
            About
          </Button>
        </Box>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with a navigation bar.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;