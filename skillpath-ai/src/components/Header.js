import React from 'react';
import { Box, Container, Heading, Text, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const bgGradient = useColorModeValue(
    'linear(to-b, white, #eaf1f6)',
    'linear(to-b, gray.800, gray.900)'
  );

  return (
    <Box as="header" py={8} bgGradient={bgGradient}>
      <Container maxW="container.xl">
        <Flex direction="column" align="center" textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            lineHeight="1.2"
            fontWeight="bold"
            color="brand.600"
            mb={4}
          >
            SkillPath.AI
          </Heading>
          <Heading
            as="h2"
            size="xl"
            lineHeight="1.2"
            fontWeight="medium"
            mb={6}
          >
            Discover Your Purpose & Build Your Dream
          </Heading>
          
          <Text fontSize="xl" color="gray.600" maxW="2xl" mb={8}>
            AI-powered coaching to help you find clarity and take action in your career journey
          </Text>

          <Button
            size="lg"
            height="16"
            px="8"
            fontSize="lg"
            colorScheme="brand"
            onClick={() => navigate('/chat')}
          >
            Start Your Journey
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
