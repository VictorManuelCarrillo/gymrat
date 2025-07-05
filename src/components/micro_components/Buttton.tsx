import Button from '@mui/material/Button';

interface tipado {
  children: React.ReactNode;
  tipos: 'text' | 'outlined' | 'contained';
}

export default function Buton(props: tipado) {
  const { children, tipos } = props;
  return <Button variant={tipos}>{children}</Button>;
}
