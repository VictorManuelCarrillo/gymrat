import Typography from '@mui/material/Typography';
import Alert from '~/components/micro_components/Alerts';
import Button from '~/components/micro_components/Buttton';
import Cards from '~/components/micro_components/Cards';
import Navbar from '~/components/organism/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Button tipos="contained">clik</Button>
      <Typography variant="h1">Hello World</Typography>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert severity="error">This is a success alert — check it out!</Alert>
      <Button tipos="contained"> Reintentar?</Button>
      <Typography variant="subtitle1">a continuacion te mostramos un card</Typography>
      <Cards />
    </>
  );
}
