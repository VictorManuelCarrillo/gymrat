import Typography from '@mui/material/Typography';

interface mascara {
  children: React.ReactNode;
  tipos: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
}

export default function Imput(props: mascara) {
  const { children, tipos } = props;
  return <Typography variant={tipos}>{children}</Typography>;
}
