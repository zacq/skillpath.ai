import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  VStack,
  useDisclosure
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

// Pulse animation
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const ChatButton = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [messages, setMessages] = useState([
    {
      text: "Greetings! I'm your SkillPath.AI Career Bot 🤖. I'm programmed to help you navigate your career path. What would you like to explore today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "That's a great question about your career path. Have you considered exploring your strengths and values first?",
        "I understand your concerns. Many professionals face similar challenges when transitioning to a new field.",
        "Based on what you've shared, you might want to look into roles that combine your technical skills with your interest in helping others.",
        "Learning new skills is always valuable. Have you thought about which specific skills would most benefit your career goals?",
        "It sounds like you're at an important crossroads. Let's break down your options and see which aligns best with your long-term vision."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      setMessages([...newMessages, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <IconButton
        icon={<FaRobot />}
        position="fixed"
        bottom="20px"
        right="20px"
        size="lg"
        isRound
        colorScheme="brand"
        animation={!isOpen ? `${pulseAnimation} 2s infinite` : undefined}
        onClick={onToggle}
        zIndex={1000}
        aria-label="Chat with AI assistant"
      />

      {/* Chat Panel */}
      <Box
        position="fixed"
        bottom="90px"
        right="20px"
        width="350px"
        height="450px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        display={isOpen ? 'flex' : 'none'}
        flexDirection="column"
        zIndex={999}
        overflow="hidden"
      >
        {/* Chat Header */}
        <Flex
          bg="brand.500"
          color="white"
          p={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="bold">SkillPath.AI Career Bot</Text>
          <IconButton
            icon={<FaTimes />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'brand.600' }}
            onClick={onClose}
            aria-label="Close chat"
            size="sm"
          />
        </Flex>

        {/* Chat Messages */}
        <VStack
          flex={1}
          p={4}
          overflowY="auto"
          spacing={4}
          align="stretch"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
              bg={message.sender === 'user' ? 'brand.100' : 'gray.100'}
              color={message.sender === 'user' ? 'gray.800' : 'gray.800'}
              p={3}
              borderRadius="lg"
              maxW="80%"
            >
              <Text>{message.text}</Text>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </VStack>

        {/* Chat Input */}
        <Flex p={3} borderTop="1px solid" borderColor="gray.200">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            mr={2}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <IconButton
            icon={<IoMdSend />}
            colorScheme="brand"
            onClick={handleSendMessage}
            aria-label="Send message"
          />
        </Flex>
      </Box>
    </>
  );
};

export default ChatButton;
