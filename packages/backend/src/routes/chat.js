const express = require('express');
const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { StreamingTextResponse, generateText } = require('ai');

const router = express.Router();

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
});

router.post('/', async (req, res) => {
  const { messages } = req.body;

  // Check if messages array exists and is not empty
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  try {
    // Get the last message
    const lastMessage = messages[messages.length - 1];

    // Create streaming response using Google AI
    const response = await generateText({
      model: google('gemini-1.5-pro-latest'),
      prompt: lastMessage.content,
      stream: true
    });

    // Return the stream response
    return new StreamingTextResponse(response);
  } catch (error) {
    console.error('Error in chat route:', error);
    console.error('Request body:', req.body);
    console.error('Messages:', messages);
    return res.status(500).json({ 
      error: 'An error occurred while processing your request',
      details: error.message,
      stack: error.stack
    });
  }
});

module.exports = router;
