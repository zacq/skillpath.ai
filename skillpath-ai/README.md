# SkillPath.AI

AI-powered career coaching platform to help you find clarity and take action in your career journey.

## Features

- Interactive landing page with information about the service
- Collapsible chat button with AI-powered career bot
- Testimonial carousel showcasing user success stories
- Full chat interface for in-depth career coaching

## N8N Webhook Integration

The chatbot can be connected to an N8N workflow for more advanced AI processing. To set up the webhook integration:

1. Create an N8N workflow with a webhook node as the trigger
2. Configure the webhook to accept POST requests with the following payload structure:
   ```json
   {
     "message": "User message text",
     "sender": "user",
     "timestamp": "2023-08-01T12:34:56.789Z",
     "sessionId": "unique_session_id"
   }
   ```
3. Set up your N8N workflow to process the message and return a response in the following format:
   ```json
   {
     "response": "AI response text"
   }
   ```
4. Copy the webhook URL from N8N
5. Create a `.env.local` file in the project root (or edit the existing one)
6. Add the following environment variables:
   ```
   REACT_APP_N8N_WEBHOOK_URL=your_webhook_url_here
   REACT_APP_ENABLE_WEBHOOK=true
   ```
7. Restart the development server

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/zacq/skillpath.ai.git
   cd skillpath-ai
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| REACT_APP_N8N_WEBHOOK_URL | URL of the N8N webhook | "" |
| REACT_APP_ENABLE_WEBHOOK | Enable/disable webhook integration | false |

## License

This project is licensed under the MIT License - see the LICENSE file for details.
