import React from 'react';
import { Box, Container, Text, Flex, Link, Stack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="white" py={10} mt={20}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Box mb={{ base: 6, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" color="brand.600">SkillPath.AI</Text>
            <Text color="gray.600" mt={2}>AI-powered career coaching platform</Text>
          </Box>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
            <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>About</Link>
            <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>Privacy</Link>
            <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>Terms</Link>
            <Link href="#" color="gray.600" _hover={{ color: 'brand.500' }}>Contact</Link>
          </Stack>
        </Flex>
        
        <Divider my={6} />
        
        <Text textAlign="center" color="gray.500" fontSize="sm">
          © {new Date().getFullYear()} SkillPath.AI. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
