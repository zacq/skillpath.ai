import {
  Box,
  Container,
  VStack,
  Input,
  Flex,
  Text,
  Heading,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';
import { FaRobot, FaUser } from 'react-icons/fa';

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to SkillPath.AI's career coaching interface. I'm here to help guide your career journey. What specific aspects would you like to explore?",
      sender: 'ai',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const bgColor = useColorModeValue('white', 'gray.700');

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      const aiResponses = [
        "That's a great question about your career path. Have you considered exploring your strengths and values first?",
        "I understand your concerns. Many professionals face similar challenges when transitioning to a new field.",
        "Based on what you've shared, you might want to look into roles that combine your technical skills with your interest in helping others.",
        "Learning new skills is always valuable. Have you thought about which specific skills would most benefit your career goals?",
        "It sounds like you're at an important crossroads. Let's break down your options and see which aligns best with your long-term vision."
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

      setIsTyping(false);
      setMessages([
        ...newMessages,
        {
          text: randomResponse,
          sender: 'ai',
        },
      ]);
    }, 1500);
  };

  return (
    <Box as="main" py={8}>
      <Container maxW="container.md">
        <VStack spacing={6}>
          <Heading as="h1" size="lg" textAlign="center">
            Career Coaching Session
          </Heading>

          <Box
            w="full"
            h="70vh"
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            display="flex"
            flexDirection="column"
          >
            {/* Chat Messages */}
            <Box
              flex={1}
              overflowY="auto"
              p={4}
              display="flex"
              flexDirection="column"
              gap={4}
            >
              {messages.map((message, index) => (
                <Flex
                  key={index}
                  alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                  maxW="80%"
                >
                  {message.sender === 'ai' && (
                    <Box
                      bg="brand.500"
                      color="white"
                      borderRadius="full"
                      p={2}
                      mr={2}
                      alignSelf="flex-end"
                    >
                      <FaRobot />
                    </Box>
                  )}

                  <Box
                    bg={message.sender === 'user' ? 'brand.100' : 'gray.100'}
                    color="gray.800"
                    p={3}
                    borderRadius="lg"
                    borderBottomRightRadius={message.sender === 'user' ? 0 : undefined}
                    borderBottomLeftRadius={message.sender === 'ai' ? 0 : undefined}
                  >
                    <Text>{message.text}</Text>
                  </Box>

                  {message.sender === 'user' && (
                    <Box
                      bg="gray.500"
                      color="white"
                      borderRadius="full"
                      p={2}
                      ml={2}
                      alignSelf="flex-end"
                    >
                      <FaUser />
                    </Box>
                  )}
                </Flex>
              ))}

              {isTyping && (
                <Flex alignSelf="flex-start" maxW="80%">
                  <Box
                    bg="brand.500"
                    color="white"
                    borderRadius="full"
                    p={2}
                    mr={2}
                    alignSelf="flex-end"
                  >
                    <FaRobot />
                  </Box>
                  <Box
                    bg="gray.100"
                    color="gray.800"
                    p={3}
                    borderRadius="lg"
                    borderBottomLeftRadius={0}
                  >
                    <Text>Typing...</Text>
                  </Box>
                </Flex>
              )}

              <div ref={messagesEndRef} />
            </Box>

            {/* Chat Input */}
            <Flex p={4} borderTop="1px solid" borderColor="gray.200">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                mr={2}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <IconButton
                icon={<IoMdSend />}
                colorScheme="brand"
                onClick={handleSend}
                aria-label="Send message"
              />
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default ChatInterface;