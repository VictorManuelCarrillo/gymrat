import Alert from '@mui/material/Alert';
interface AlertProps {
  children: React.ReactNode;
  severity?: 'error' | 'warning' | 'info' | 'success';
}
export default function Alerta(props: AlertProps) {
  const { children, severity } = props;
  return <Alert severity={severity}>{children}</Alert>;
}
