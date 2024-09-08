'use client';

import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from '~/themes/common';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Obtener la preferencia del usuario desde localStorage o predeterminar a false
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  useEffect(() => {
    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} onThemeChange={handleThemeChange} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
