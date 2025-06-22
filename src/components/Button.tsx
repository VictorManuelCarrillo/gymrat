import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  component?: React.ReactElement;
  disable?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  loadingPosition?: 'center' | 'end' | 'start';

  size?: 'small' | 'medium' | 'large';

  startIcon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props;

  return <MuiButton {...restProps}>{children}</MuiButton>;
};
