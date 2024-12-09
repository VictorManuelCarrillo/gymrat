import { CssBaseline } from '@mui/material';
export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CssBaseline />
      {children}
    </div>
  );
};
