// src/routes/auth.js
const express = require('express');
const { StreamChat } = require('stream-chat');
const router = express.Router();
require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

const chatClient = StreamChat.getInstance(apiKey, apiSecret);

// Ruta para generar un token de usuario
router.get('/token/:userId', (req, res) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Generar el token
    const token = chatClient.createToken(userId);
    res.status(200).json({ token });
    console.log('✅ Token generated');
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

module.exports = router;
