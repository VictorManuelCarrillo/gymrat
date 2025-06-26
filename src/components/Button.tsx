'use client';
import { Button as MuiButton } from '@mui/material';

import Style from './button.module.css';
interface ButtonProps {
  children: React.ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  //component?: React.ReactElement;
  //disable?: boolean;
  //disableElevation?: boolean;
  //disableFocusRipple?: boolean;
  //disableRipple?: boolean;
  //endIcon?: React.ReactNode;
  //fullWidth?: boolean;
  href?: string;
  //loading?: boolean;
  //loadingIndicator?: React.ReactNode;
  //loadingPosition?: 'center' | 'end' | 'start';

  //size?: 'small' | 'medium' | 'large';

  //startIcon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, variant, children, ...restProps } = props;

  switch (variant) {
    case 'outlined':
      return (
        <MuiButton className={Style.border} onClick={onClick} {...restProps}>
          {children}
        </MuiButton>
      );
    case 'contained':
      return (
        <MuiButton className={Style.outlined} onClick={onClick} {...restProps}>
          {children}
        </MuiButton>
      );
    case 'text':
      return (
        <MuiButton className={Style.text} onClick={onClick} {...restProps}>
          {children}
        </MuiButton>
      );
      return (
        <MuiButton variant={variant} className={Style.border} onClick={onClick} {...restProps}>
          {children}
        </MuiButton>
      );
  }
};
