import { Visibility } from '@mui/icons-material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  TextField as MuiTextField,
  Box,
  SlotProps,
  FilledInputProps,
  BaseTextFieldProps,
  FormHelperTextProps,
  InputLabelProps,
  IconButton,
  MenuItem,
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
  margin?: 'dense' | 'none' | 'normal';
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
  size?: 'small' | 'medium';
  slotProps?: {
    root?: SlotProps<'div', BaseTextFieldProps, object>; // Root element props
    input?: SlotProps<'input', FilledInputProps, object>; // Input props when variant is 'filled'
    label?: SlotProps<'label', InputLabelProps, object>; // Label props
    helperText?: SlotProps<'p', FormHelperTextProps, object>; // Helper text props
  };
  sx?: React.CSSProperties;
  type?: string;
  value?: unknown;
  variant?: 'filled' | 'outlined' | 'standard';
}

const DEFAULT_PROPS: Partial<TextFieldProps> = {
  autoComplete: 'on',
  color: 'primary',
  size: 'small',
  type: 'text',
  variant: 'standard',
};

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    autoComplete = DEFAULT_PROPS.autoComplete,
    className,
    color = DEFAULT_PROPS.color,
    select,
    size = DEFAULT_PROPS.size,
    options,
    slotProps = {},
    type = DEFAULT_PROPS.type,
    variant = DEFAULT_PROPS.variant,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const slProps = {
    slotProps,
    input: {
      endAdornment: (
        <IconButton
          aria-label={showPassword ? 'hide the password' : 'display the password'}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          onMouseUp={handleMouseUpPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      ),
    },
  };

  switch (type) {
    case 'password':
      return (
        <Box>
          {select && options ? (
            <MuiTextField
              autoComplete={autoComplete}
              className={clsx(className, style.textfield)}
              color={color}
              size={size}
              select={select} // Activa el modo select
              variant={variant}
              slotProps={slotProps}
              {...rest}
            >
              {select &&
                options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </MuiTextField>
          ) : (
            <MuiTextField
              autoComplete={autoComplete}
              className={clsx(className, style.textfield)}
              color={color}
              size={size}
              slotProps={slProps}
              type={showPassword ? 'text' : 'password'}
              variant={variant}
              {...rest}
            />
          )}
        </Box>
      );

    default:
      return select && options ? (
        <MuiTextField
          autoComplete={autoComplete}
          className={clsx(className, style.textfield)}
          color={color}
          size={size}
          select={select}
          variant={variant}
          slotProps={slotProps}
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiTextField>
      ) : (
        <MuiTextField
          autoComplete={autoComplete}
          className={clsx(className, style.textfield)}
          color={color}
          size={size}
          slotProps={slotProps}
          type={type}
          variant={variant}
          {...rest}
        />
      );
  }
};
