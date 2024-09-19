import React from 'react';
import Link from 'next/link';
import { Fab } from '@mui/material';
import s from './FAB.module.scss';

interface FABProps {
  children: React.ReactNode;
  color?: 'default' | 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
  disabled?: boolean;
  floating?: boolean;
  href?: string;
  newTab?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  type?: 'circular' | 'extended';
}

export const FAB: React.FC<FABProps> = ({
  children,
  color = 'primary',
  disabled = false,
  floating = false,
  href,
  newTab = false,
  size = 'medium',
  style,
  type = 'circular',
}) => {
  const fabButton = (
    <Fab color={color} disabled={disabled} size={size} sx={style} variant={type} className={floating ? s['fab-floating'] : undefined}>
      {children}
    </Fab>
  );

  if (href) {
    return (
      <Link href={href} target={newTab ? '_blank' : '_self'} rel={newTab ? 'noopener noreferrer' : undefined}>
        {fabButton}
      </Link>
    );
  }

  return fabButton;
};
