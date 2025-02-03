import { Switch as MuiSwitch } from '@mui/material';

interface SwitchProps {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  edge?: 'end' | 'start' | false;
  icon?: React.ReactNode;
  id?: string;
  inputProps?: object;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent) => void;
  required?: boolean;
  size?: 'medium' | 'small';
  sx?: React.CSSProperties;
  value?: unknown;
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const { ...rest } = props;
  return <MuiSwitch {...rest} />;
};
