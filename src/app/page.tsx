import { PrimaryLayout } from '~/common/components/templates/layout';
import { Button } from '~/common/components/atoms/input/Button';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function HomePage() {
  const handleClose = (event: React.SyntheticEvent) => {
    console.log("Alerta cerrada");
  };
  return (
    <PrimaryLayout>
      <Button type='contained'>ola</Button>
      <Button type='outlined'>ola</Button>
      <Button type='text'>ola</Button>
      <Button type='icon'><LightModeIcon/></Button>
    </PrimaryLayout>
  );
}
