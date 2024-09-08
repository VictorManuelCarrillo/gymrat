import { Button as MuiButton, IconButton } from '@mui/material';
import React from 'react';
import Link from 'next/link';
// import classNames from 'classnames';
// import styles from './Button.module.css'; // Asegúrate de tener este archivo para los estilos

interface ButtonProps {
  children: React.ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  className?: string; // Para clases adicionales
  disabled?: boolean;
  edge?: 'end' | 'start' | false;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  onClick?: (event: any) => void;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  newTab?: boolean;
  style?: React.CSSProperties;
  type?: 'contained' | 'outlined' | 'text' | 'icon';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    color,
    disabled,
    edge,
    endIcon,
    fullWidth,
    href,
    onClick,
    size,
    startIcon,
    newTab,
    style,
    type,
  } = props;

  // const buttonClassName = classNames({
  //   [styles.contained]: type === 'contained',
  //   [styles.outlined]: type === 'outlined',
  //   [styles.text]: type === 'text',
  //   [styles.icon]: type === 'icon',
  //   [className || '']: className
  // });

  if (type === 'icon') {
    return href ? (
      <Link
        href={href}
        about={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        passHref>
        <IconButton
          color={color}
          sx={style}
          disabled={disabled}
          edge={edge} // Puedes ajustar este prop según lo necesites
          size={size}
          // className={buttonClassName}
          onClick={onClick}>
          {children}
        </IconButton>
      </Link>
    ) : (
      <IconButton
        color={color}
        sx={style}
        disabled={disabled}
        edge={edge} // Puedes ajustar este prop según lo necesites
        size={size}
        // className={buttonClassName}
        onClick={onClick}>
        {children}
      </IconButton>
    );
  }

  return href ? (
    <Link
      href={href}
      about={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      passHref>
      <MuiButton
        color={color}
        sx={style}
        disabled={disabled}
        endIcon={endIcon}
        fullWidth={fullWidth}
        onClick={onClick}
        size={size}
        startIcon={startIcon}
        // className={buttonClassName}
        variant={type}>
        {children}
      </MuiButton>
    </Link>
  ) : (
    <MuiButton
      color={color}
      sx={style}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fullWidth}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      // className={buttonClassName}
      variant={type}>
      {children}
    </MuiButton>
  );
};
