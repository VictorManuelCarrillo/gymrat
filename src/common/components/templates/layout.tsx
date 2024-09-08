// layout/PrimaryLayout.tsx

'use client';

import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from '~/themes/common';
import { Navbar } from '../organisms/Navbar';

export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} onThemeChange={handleThemeChange} />
      {children}
    </ThemeProvider>
  );
};
