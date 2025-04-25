import axios from 'axios';
import { config } from '../config';

/**
 * Sends a message to the N8N webhook
 * @param {string} message - The message to send
 * @param {string} sender - The sender of the message (user or bot)
 * @returns {Promise} - The response from the webhook
 */
export const sendMessageToWebhook = async (message, sender = 'user') => {
  try {
    // Check if webhook URL is configured
    if (!config.webhookUrl) {
      console.warn('Webhook URL is not configured. Message not sent to webhook.');
      return null;
    }

    // Prepare the payload
    const payload = {
      message,
      sender,
      timestamp: new Date().toISOString(),
      sessionId: getOrCreateSessionId(),
    };

    // Send the request to the webhook
    const response = await axios.post(config.webhookUrl, payload);
    
    console.log('Message sent to webhook:', payload);
    return response.data;
  } catch (error) {
    console.error('Error sending message to webhook:', error);
    throw error;
  }
};

/**
 * Gets or creates a session ID for the current chat session
 * @returns {string} - The session ID
 */
const getOrCreateSessionId = () => {
  // Check if session ID exists in localStorage
  let sessionId = localStorage.getItem('skillpath_session_id');
  
  // If not, create a new one
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('skillpath_session_id', sessionId);
  }
  
  return sessionId;
};
