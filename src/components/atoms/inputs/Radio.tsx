import { Radio as MuiRadio, RadioGroup as MuiRadioGroup, FormControlLabel } from '@mui/material';
import React from 'react';

interface BaseProps {
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioProps extends BaseProps {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  id?: string;
  inputProps?: object;
  inputRef?: React.Ref<HTMLElement>;
  required?: boolean;
  size?: 'medium' | 'small';
  sx?: React.CSSProperties;
  value: unknown;
  label?: string;
}

interface RadioGroupProps extends BaseProps {
  children?: React.ReactNode;
  defaultValue?: unknown;
  value?: unknown;
  row?: boolean;
}

const BaseRadio: React.FC<RadioProps> = ({ label, ...rest }) => {
  return <FormControlLabel control={<MuiRadio {...rest} />} label={label || ''} />;
};

const BaseRadioGroup: React.FC<RadioGroupProps> = ({ children, ...rest }) => {
  return <MuiRadioGroup {...rest}>{children}</MuiRadioGroup>;
};

interface RadioComponentProps extends BaseProps {
  group?: boolean;
  groupProps?: RadioGroupProps;
  radioProps?: RadioProps;
  children?: React.ReactNode;
}

export const Radio: React.FC<RadioComponentProps> = ({ group = false, groupProps, radioProps, children }) => {
  return group ? <BaseRadioGroup {...groupProps}>{children}</BaseRadioGroup> : <BaseRadio {...(radioProps as RadioProps)} />;
};
