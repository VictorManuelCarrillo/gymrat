import { Checkbox as MuiCheckbox } from '@mui/material';

interface CheckboxProps {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  indeterminateIcon?: React.ReactNode;
  inputProps?: object;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent) => void;
  required?: boolean;
  size?: 'medium' | 'small';
  sx?: React.CSSProperties;
  value?: unknown;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { ...rest } = props;
  return <MuiCheckbox {...rest} />;
};
