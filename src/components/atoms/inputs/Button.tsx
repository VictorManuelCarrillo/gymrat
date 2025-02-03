import { Button as MuiButton, IconButton as MuiIconButton, ButtonProps as MuiButtonProps } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { ElementType, ReactNode } from 'react';

import styles from '../../../styles/components/atoms/inputs/Button.module.scss'; // Importar SCSS Module

interface BaseButtonProps {
  children: ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  className?: string;
  disabled?: boolean;
  disabledElevation?: boolean;
  disableFocusRipple?: boolean;
  href?: string;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  loadingPosition?: 'center' | 'end' | 'start';
  newTab?: boolean;
  size?: 'small' | 'medium' | 'large';
  sx?: React.CSSProperties;
}

interface ButtonProps extends BaseButtonProps {
  component?: ElementType;
  disabledElevation?: boolean;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

interface IconButtonProps extends BaseButtonProps {
  edge?: 'end' | 'start';
}

// Utility to handle dynamic class generation
const getButtonClass = (variant: string, className?: string) =>
  clsx(className, {
    [styles.btn]: variant !== 'icon', // Usar styles.btn
    [styles[`btn__${variant}`]]: variant, // Usar estilos dinámicos basados en el variant
  });

// Generic Link wrapper
const LinkWrapper: React.FC<{
  href: string;
  newTab?: boolean;
  children: ReactNode;
}> = ({ href, newTab, children }) => (
  <Link href={href} passHref>
    <a target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  </Link>
);

// Base Button Component
const ButtonBase: React.FC<ButtonProps> = ({
  children,
  href,
  newTab,
  variant = 'contained',
  className,
  fullWidth,
  disabled,
  sx,
  component = 'button',
  ...rest
}) => {
  const buttonClasses = getButtonClass(variant, className);

  const commonProps: MuiButtonProps = {
    className: buttonClasses,
    style: sx,
    variant,
    fullWidth,
    disabled,
    ...rest,
  };

  return href ? (
    <LinkWrapper href={href} newTab={newTab}>
      <MuiButton component="a" {...commonProps}>
        {children}
      </MuiButton>
    </LinkWrapper>
  ) : (
    <MuiButton component={component} {...commonProps}>
      {children}
    </MuiButton>
  );
};

// Icon Button Component
const IconButtonBase: React.FC<IconButtonProps> = ({ children, href, newTab, className, edge, sx, ...rest }) => {
  const iconButtonClasses = clsx(className, { 'Mui-disabled': rest.disabled });

  return href ? (
    <LinkWrapper href={href} newTab={newTab}>
      <MuiIconButton className={iconButtonClasses} edge={edge} style={sx} component="a" {...rest}>
        {children}
      </MuiIconButton>
    </LinkWrapper>
  ) : (
    <MuiIconButton className={iconButtonClasses} edge={edge} style={sx} {...rest}>
      {children}
    </MuiIconButton>
  );
};

// Main Button Component
export const Button: React.FC<ButtonProps & { icon?: boolean }> = ({ icon, ...props }) =>
  icon ? <IconButtonBase {...props} /> : <ButtonBase {...props} />;
