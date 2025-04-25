/**
 * Application configuration
 */
export const config = {
  // N8N webhook URL - will be provided later
  webhookUrl: process.env.REACT_APP_N8N_WEBHOOK_URL || '',
  
  // Whether to enable webhook integration
  enableWebhook: process.env.REACT_APP_ENABLE_WEBHOOK === 'true' || false,
  
  // Default bot responses when webhook is not available or fails
  defaultBotResponses: [
    "That's a great question about your career path. Have you considered exploring your strengths and values first?",
    "I understand your concerns. Many professionals face similar challenges when transitioning to a new field.",
    "Based on what you've shared, you might want to look into roles that combine your technical skills with your interest in helping others.",
    "Learning new skills is always valuable. Have you thought about which specific skills would most benefit your career goals?",
    "It sounds like you're at an important crossroads. Let's break down your options and see which aligns best with your long-term vision."
  ],
  
  // Timeout for webhook requests in milliseconds
  webhookTimeout: 10000,
};
