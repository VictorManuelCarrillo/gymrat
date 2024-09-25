'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { Navbar } from '../organisms/Navbar';

export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, theme, handleThemeChange } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navbar darkMode={darkMode} onThemeChange={handleThemeChange} /> */}
      {children}
    </ThemeProvider>
  );
};
