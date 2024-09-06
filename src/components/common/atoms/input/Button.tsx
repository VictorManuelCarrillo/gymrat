import React from 'react';
import { Button as Btn, IconButton } from '@mui/material';

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  type: 'text' | 'contained' | 'outlined' | 'icon';
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  newTab?: boolean;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { children, type = 'contained', disabled, fullWidth, size, color, startIcon, endIcon, href, newTab } = props;

  switch (type) {
    case 'text':
      return href && typeof href === 'string' && href.trim() !== '' ? (
        <Link href={(href && href) || ''} about={newTab ? '_blank' : undefined}>
          <Btn
            variant={type}
            disabled={disabled && disabled}
            fullWidth={fullWidth ? true : false}
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}>
            {children}
          </Btn>
        </Link>
      ) : (
        <Btn
          variant={type}
          disabled={disabled && disabled}
          fullWidth={fullWidth ? true : false}
          size={size}
          startIcon={startIcon}
          endIcon={endIcon}>
          {children}
        </Btn>
      );
    case 'contained':
      return href && typeof href === 'string' && href.trim() !== '' ? (
        <Link href={(href && href) || ''} about={newTab ? '_blank' : undefined}>
          <Btn
            variant={type}
            disabled={disabled && disabled}
            fullWidth={fullWidth ? true : false}
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}>
            {children}
          </Btn>
        </Link>
      ) : (
        <Btn
          variant={type}
          disabled={disabled && disabled}
          fullWidth={fullWidth ? true : false}
          size={size}
          startIcon={startIcon}
          endIcon={endIcon}>
          {children}
        </Btn>
      );
    case 'outlined':
      return href && typeof href === 'string' && href.trim() !== '' ? (
        <Link href={href && href}>
          <Btn
            variant={type}
            disabled={disabled && disabled}
            fullWidth={fullWidth ? true : false}
            size={size}
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}>
            {children}
          </Btn>
        </Link>
      ) : (
        <Btn
          variant={type}
          disabled={disabled && disabled}
          fullWidth={fullWidth ? true : false}
          size={size}
          color={color}
          startIcon={startIcon}
          endIcon={endIcon}>
          {children}
        </Btn>
      );
    case 'icon':
      return href && typeof href === 'string' && href.trim() !== '' ? (
        <Link href={href && href}>
          <IconButton
            color={color}
            disabled={disabled && disabled}
            size={size}>
            {children}
          </IconButton>
        </Link>
      ) : (
        <IconButton
          color={color}
          disabled={disabled && disabled}
          size={size}>
          {children}
        </IconButton>
      );
  }
};
