import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';

// Find the root element in your HTML
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render your app
root.render(<App />);