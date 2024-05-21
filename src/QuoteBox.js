// src/QuoteBox.js
import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#000000');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setColor(getRandomColor());
    } catch (error) {
      setQuote('An error occurred. Please try again.');
      setAuthor('');
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="text" >"{quote}"</p>
      <p id="author">- {author} </p>
      <button id="new-quote" onClick={fetchQuote} style={{ backgroundColor: color }}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
