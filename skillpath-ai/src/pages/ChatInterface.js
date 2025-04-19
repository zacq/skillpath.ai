import {
  Box,
  Container,
  VStack,
  Input,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // TODO: Implement AI response logic
    // For now, just add a mock response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          text: "I'm here to help guide your career journey. What specific aspects would you like to explore?",
          sender: 'ai',
        },
      ]);
    }, 1000);
  };

  return (
    <Container maxW="container.md" h="100vh" py={4}>
      <VStack h="full" spacing={4}>
        <Box
          flex={1}
          w="full"
          overflowY="auto"
          p={4}
          borderRadius="md"
          bg="white"
          boxShadow="sm"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              bg={message.sender === 'user' ? 'brand.100' : 'gray.100'}
              p={3}
              borderRadius="lg"
              mb={2}
              alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
            >
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>

        <Flex w="full">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            mr={2}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </Flex>
      </VStack>
    </Container>
  );
}

export default ChatInterface;