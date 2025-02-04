import { Select as MuiSelect, SelectChangeEvent } from '@mui/material';

interface SelectProps {
  autoWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  defaultValue?: unknown;
  displayEmpty?: boolean;
  IconComponent?: React.ElementType;
  id?: string;
  input?: React.ReactElement;
  inputProps?: Record<string, unknown>;
  label?: React.ReactNode;
  labelId?: string;
  MenuProps?: Record<string, unknown>;
  multiple?: boolean;
  native?: boolean;
  onChange?: (event: SelectChangeEvent<unknown>, child?: React.ReactNode) => void;
  onClose?: (event: React.SyntheticEvent) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  renderValue?: (value: unknown) => React.ReactNode;
  SelectDisplayProps?: Record<string, unknown>;
  sx?: React.CSSProperties;
  value?: unknown;
  variant?: 'filled' | 'outlined' | 'standard';
}

export const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return <MuiSelect {...rest}>{children}</MuiSelect>;
};
