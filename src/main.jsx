import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SimpleThemeProvider } from './contexts/SimpleTheme'; // Simple version

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleThemeProvider>
      <App />
    </SimpleThemeProvider>
  </React.StrictMode>
);