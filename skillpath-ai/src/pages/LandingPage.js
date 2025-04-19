import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const gradientBg = useColorModeValue(
    'linear(to-b, brand.50, white)',
    'linear(to-b, gray.800, gray.900)'
  );

  return (
    <Box
      minH="100vh"
      bgGradient={gradientBg}
    >
      <Container maxW="container.xl" pt={20}>
        <VStack spacing={8} textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            lineHeight="1.2"
            fontWeight="bold"
          >
            Discover Your Purpose & Build Your Dream
          </Heading>
          
          <Text fontSize="xl" color="gray.600" maxW="2xl">
            AI-powered coaching to help you find clarity and take action in your career journey
          </Text>

          <Button
            size="lg"
            height="16"
            px="8"
            fontSize="lg"
            onClick={() => navigate('/chat')}
          >
            Start Your Journey
          </Button>

          {/* How it Works Section */}
          <Box py={20}>
            <Heading as="h2" size="xl" mb={10}>
              How It Works
            </Heading>
            {/* Add your how it works content */}
          </Box>

          {/* Testimonial Section */}
          <Box py={10}>
            <Text fontSize="lg" fontStyle="italic">
              "SkillPath.AI helped me discover my true calling and provided actionable steps to achieve my goals."
            </Text>
            <Text mt={4} fontWeight="bold">
              - Sarah Johnson, Software Engineer
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default LandingPage;