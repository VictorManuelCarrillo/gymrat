import { Button } from '@mui/material';
import { ButtonGroup } from '~/components/atoms/inputs/ButtonGroup';
import { Checkbox } from '~/components/atoms/inputs/Checkbox';
import { Fab } from '~/components/atoms/inputs/Fab';

export default function TestPage() {
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button>ola</Button>
        <Button>ola</Button>
        <Button>ola</Button>
        <Button>ola</Button>
      </ButtonGroup>
      <Checkbox defaultChecked />
      <Fab>ola</Fab>
    </div>
  );
}
