import React from 'react';
import { Switch as MuiSwitch } from '@mui/material';

interface SwitchProps {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  defaultChecked?: boolean;
  icon?: React.ReactNode;
  id?: string;
  onChange?: () => void;
  required?: boolean;
  size?: 'medium' | 'small';
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const {...rest } = props;

  return (
    <MuiSwitch
      {...rest}
    />
  );
};
