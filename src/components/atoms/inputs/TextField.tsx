import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  TextField as MuiTextField,
  Box,
  IconButton,
  MenuItem,
  FilledInputProps,
  InputLabelProps,
  FormHelperTextProps,
} from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';

import style from '../../../styles/components/atoms/inputs/Textfield.module.scss';

interface Option {
  value: string | number;
  label: string;
}

interface TextFieldProps {
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: unknown;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  maxRows?: number | string;
  minRows?: number | string;
  multiline?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options?: Option[];
  placeholder?: string;
  required?: boolean;
  rows?: number | string;
  select?: boolean;
  sx?: React.CSSProperties;
  type?: string;
  value?: unknown;
  variant?: 'filled' | 'outlined' | 'standard';
  slotProps?: {
    root?: Record<string, unknown>;
    input?: Partial<FilledInputProps>;
    label?: Partial<InputLabelProps>;
    helperText?: Partial<FormHelperTextProps>;
  };
}

const DEFAULT_PROPS: Partial<TextFieldProps> = {
  autoComplete: 'on',
  color: 'primary',
  type: 'text',
  variant: 'standard',
};

export const TextField: React.FC<TextFieldProps> = ({
  autoComplete = DEFAULT_PROPS.autoComplete,
  className,
  color = DEFAULT_PROPS.color,
  select,
  options,
  type = DEFAULT_PROPS.type,
  variant = DEFAULT_PROPS.variant,
  slotProps = {},
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const PasswordAdornment = (
    <IconButton aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={togglePasswordVisibility} edge="end">
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );

  const computedSlotProps = {
    ...slotProps,
    input: {
      ...slotProps.input,
      endAdornment: type === 'password' ? PasswordAdornment : slotProps.input?.endAdornment,
    } as Partial<FilledInputProps>,
  };

  const renderTextField = () => (
    <MuiTextField
      autoComplete={autoComplete}
      className={clsx(className, style['MuiTextField-root'])}
      color={color}
      size="small"
      type={type === 'password' && !showPassword ? 'password' : 'text'}
      variant={variant}
      slotProps={computedSlotProps}
      {...rest}
    />
  );

  return (
    <Box>
      {select && options ? (
        <MuiTextField
          autoComplete={autoComplete}
          className={clsx(className, style['MuiTextField-root'])}
          color={color}
          select
          variant={variant}
          size="small"
          slotProps={slotProps}
          {...rest}
        >
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </MuiTextField>
      ) : (
        renderTextField()
      )}
    </Box>
  );
};
