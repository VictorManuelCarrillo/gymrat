import { Fab as MuiFab } from '@mui/material';

interface FabProps {
  children?: React.ReactNode;
  className?: string;
  color?: 'default' | 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
  component?: React.ElementType;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  sx?: React.CSSProperties;
  variant?: 'circular' | 'extended';
}

export const Fab: React.FC<FabProps> = (props) => {
  const { ...rest } = props;
  return <MuiFab {...rest}></MuiFab>;
};
