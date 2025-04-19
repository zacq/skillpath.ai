import React, { useState, useEffect, useCallback } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Button, 
  useColorModeValue,
  IconButton,
  Flex
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "SkillPath.AI helped me discover my true calling and provided actionable steps to achieve my goals. The personalized guidance was exactly what I needed to make a confident career transition.",
    name: "Sarah Johnson",
    title: "Software Engineer"
  },
  {
    quote: "After feeling stuck in my career for years, SkillPath.AI provided clarity and direction. The AI identified skills I didn't realize were valuable and connected me with opportunities that aligned with my values.",
    name: "Michael Rodriguez",
    title: "Marketing Director"
  },
  {
    quote: "The career roadmap SkillPath.AI created for me was incredibly detailed and practical. I've followed it step by step and have already seen tremendous growth in both my skills and confidence.",
    name: "Priya Patel",
    title: "Healthcare Administrator"
  },
  {
    quote: "As someone changing careers later in life, I was worried about starting over. SkillPath.AI showed me how to leverage my existing experience while developing new skills that employers actually value.",
    name: "David Wilson",
    title: "Former Teacher, Now UX Designer"
  },
  {
    quote: "The AI coach asked me questions no career counselor ever had. It uncovered patterns in my work history that revealed my true strengths. I'm now in a role that energizes me every day.",
    name: "Emma Chen",
    title: "Product Manager"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const bgColor = useColorModeValue('white', 'gray.700');
  const quoteColor = useColorModeValue('brand.100', 'brand.200');
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset autoplay timer when manually changing slides
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 100);
    }
  };
  
  // Auto-advance slides
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);
  
  return (
    <Box as="section" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            What Our Users Say
          </Heading>
          
          <Box 
            position="relative" 
            width="100%" 
            maxW="800px" 
            mx="auto"
          >
            <Box
              bg={bgColor}
              borderRadius="lg"
              boxShadow="md"
              p={8}
              position="relative"
              minHeight="300px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box 
                color={quoteColor} 
                position="absolute" 
                top={4} 
                left={4}
              >
                <FaQuoteLeft size="24px" />
              </Box>
              
              <VStack spacing={6} mt={6}>
                <Text 
                  fontSize="lg" 
                  fontStyle="italic" 
                  textAlign="center"
                >
                  {testimonials[currentIndex].quote}
                </Text>
                
                <Box textAlign="center">
                  <Text fontWeight="bold">
                    {testimonials[currentIndex].name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {testimonials[currentIndex].title}
                  </Text>
                </Box>
              </VStack>
            </Box>
            
            {/* Navigation Controls */}
            <Flex justify="center" mt={6}>
              <IconButton
                icon={<FaChevronLeft />}
                aria-label="Previous testimonial"
                onClick={goToPrev}
                mr={2}
                isRound
                colorScheme="brand"
                size="sm"
              />
              
              <HStack spacing={2} mx={4}>
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    size="xs"
                    isRound
                    variant="unstyled"
                    onClick={() => goToSlide(index)}
                    opacity={index === currentIndex ? 1 : 0.5}
                    bg={index === currentIndex ? "brand.500" : "gray.300"}
                    height="10px"
                    width="10px"
                    minWidth="10px"
                    p={0}
                    _hover={{ opacity: 0.8 }}
                  />
                ))}
              </HStack>
              
              <IconButton
                icon={<FaChevronRight />}
                aria-label="Next testimonial"
                onClick={goToNext}
                ml={2}
                isRound
                colorScheme="brand"
                size="sm"
              />
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Testimonials;
