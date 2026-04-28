import React, { useState } from 'react';
import { generateContent } from './gemini';

function AiAssistant() {
  const [response, setResponse] = useState('');

  const handleAiRequest = async () => {
    const text = await generateContent("Write a tagline for a jewelry store.");
    setResponse(text);
  };

  return (
    <div>
      <button onClick={handleAiRequest}>Generate Magic</button>
      <p>{response}</p>
    </div>
  );
}