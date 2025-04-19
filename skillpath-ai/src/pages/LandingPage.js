import { Box, Container, VStack } from '@chakra-ui/react';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

function LandingPage() {
  return (
    <Box as="main">
      <Container maxW="container.xl" pt={8} pb={16}>
        <VStack spacing={16}>
          {/* How It Works Section */}
          <HowItWorks />

          {/* Testimonials Section */}
          <Testimonials />
        </VStack>
      </Container>
    </Box>
  );
}

export default LandingPage;