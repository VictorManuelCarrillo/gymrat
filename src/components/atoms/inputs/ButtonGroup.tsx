import { ButtonGroup as MuiButtonGroup } from '@mui/material';
import React from 'react';

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  component?: React.ElementType;
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  sx?: React.CSSProperties;
  variant?: 'contained' | 'outlined' | 'text';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiButtonGroup {...rest}>{children}</MuiButtonGroup>;
};
