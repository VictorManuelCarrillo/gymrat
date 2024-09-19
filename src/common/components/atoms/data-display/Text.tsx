import React, { ElementType } from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  children: React.ReactNode;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled';
  component?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'; //variant
}

export const Text: React.FC<TextProps> = (props) => {
  const { align, children, color, component = 'p', style, type = 'body1', className } = props;
  return (
    <Typography
      align={align}
      variant={type}
      color={color}
      component={component}
      sx={style}
      className={className}>
      {children}
    </Typography>
  );
};
