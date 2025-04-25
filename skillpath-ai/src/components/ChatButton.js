import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  VStack,
  useDisclosure,
  Spinner
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { sendMessageToWebhook } from '../services/webhookService';
import { config } from '../config';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Clear any previous errors
    setError(null);

    // Add user message
    const userMessage = input.trim();
    const newMessages = [...messages, { text: userMessage, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Set loading state
    setIsLoading(true);

    try {
      let botResponse;

      // Check if webhook integration is enabled
      if (config.enableWebhook) {
        try {
          // Send message to webhook
          const webhookResponse = await sendMessageToWebhook(userMessage, 'user');

          // Use response from webhook if available
          if (webhookResponse && webhookResponse.response) {
            botResponse = webhookResponse.response;
          } else {
            // Fallback to default responses if webhook doesn't return a valid response
            botResponse = getRandomBotResponse();
          }
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
          // Fallback to default responses if webhook fails
          botResponse = getRandomBotResponse();
        }
      } else {
        // Use default responses if webhook is not enabled
        botResponse = getRandomBotResponse();
      }

      // Add bot response to messages
      setTimeout(() => {
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
        setIsLoading(false);
      }, 1000); // Slight delay for natural feel

    } catch (err) {
      console.error('Error in handleSendMessage:', err);
      setError('Failed to send message. Please try again.');
      setIsLoading(false);
    }
  };

  // Get a random bot response from the default responses
  const getRandomBotResponse = () => {
    return config.defaultBotResponses[
      Math.floor(Math.random() * config.defaultBotResponses.length)
    ];
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

          {/* Loading indicator */}
          {isLoading && (
            <Flex alignSelf="flex-start" align="center" bg="gray.100" p={3} borderRadius="lg">
              <Spinner size="sm" mr={2} color="brand.500" />
              <Text fontSize="sm">Bot is typing...</Text>
            </Flex>
          )}

          {/* Error message */}
          {error && (
            <Box alignSelf="center" bg="red.100" color="red.700" p={2} borderRadius="md">
              <Text fontSize="sm">{error}</Text>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </VStack>

        {/* Chat Input */}
        <Flex p={3} borderTop="1px solid" borderColor="gray.200">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            mr={2}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
            isDisabled={isLoading}
          />
          <IconButton
            icon={isLoading ? <Spinner size="sm" /> : <IoMdSend />}
            colorScheme="brand"
            onClick={handleSendMessage}
            aria-label="Send message"
            isDisabled={isLoading || !input.trim()}
            isLoading={isLoading}
          />
        </Flex>
      </Box>
    </>
  );
};

export default ChatButton;
