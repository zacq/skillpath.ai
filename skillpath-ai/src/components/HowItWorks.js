import React from 'react';
import { Box, Container, Heading, SimpleGrid, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaSearch, FaRoad, FaChartLine } from 'react-icons/fa';

const FeatureCard = ({ title, description, icon }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const IconComponent = icon;
  
  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      p={6}
      textAlign="center"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Box
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        bg="brand.100"
        color="brand.600"
        borderRadius="full"
        p={3}
        mb={4}
      >
        <IconComponent size="24px" />
      </Box>
      <Heading as="h3" size="md" mb={3}>
        {title}
      </Heading>
      <Text color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

const HowItWorks = () => {
  return (
    <Box as="section" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            How It Works
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%">
            <FeatureCard
              title="Discover"
              description="Explore your skills, interests, and values to find your ideal career path."
              icon={FaSearch}
            />
            <FeatureCard
              title="Plan"
              description="Get a personalized roadmap with actionable steps to achieve your career goals."
              icon={FaRoad}
            />
            <FeatureCard
              title="Grow"
              description="Develop the skills and knowledge needed to excel in your chosen field."
              icon={FaChartLine}
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
