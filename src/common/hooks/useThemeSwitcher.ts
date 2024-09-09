'use client';
import { useState, useEffect } from 'react';
import { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '~/themes/common';

const useThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    if (typeof window !== 'undefined') {
      try {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
          setDarkMode(true);
        }
      } catch (error) {
        console.error('Error al acceder a localStorage:', error);
      }
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleThemeChange = () => {
    try {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  };

  const theme: Theme = darkMode ? darkTheme : lightTheme;

  return { darkMode, theme, handleThemeChange };
};

export default useThemeSwitcher;
