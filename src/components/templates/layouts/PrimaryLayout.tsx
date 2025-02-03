import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import lightTheme from '~/themes/light.theme';
export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl">{children}</Container>
    </ThemeProvider>
  );
};
