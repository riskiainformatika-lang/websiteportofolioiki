import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const SimpleThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Always dark mode for now
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    // Simple toggle - hanya untuk testing
    alert("Dark/Light mode coming soon!");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useSimpleTheme = () => useContext(ThemeContext);