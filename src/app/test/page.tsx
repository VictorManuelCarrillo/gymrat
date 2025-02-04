'use client';
import { Button } from '@mui/material';
import { ButtonGroup } from '~/components/atoms/inputs/ButtonGroup';
import { Checkbox } from '~/components/atoms/inputs/Checkbox';
import { Fab } from '~/components/atoms/inputs/Fab';
import { Radio } from '~/components/atoms/inputs/Radio';
import { useState } from 'react';

export default function TestPage() {
  const [selectedValue, setSelectedValue] = useState('option1');

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
      <div>
        <Radio
          radioProps={{
            value: 'option1',
            label: 'Opción 1',
            color: 'primary',
            onChange: (e) => console.log(e.target.value),
          }}
        />
        <div>
          <Radio
            group={true}
            groupProps={{
              name: 'radio-group',
              value: selectedValue,
              onChange: (e) => setSelectedValue(e.target.value),
              row: true, // Para alinear horizontalmente
            }}
          >
            <Radio radioProps={{ value: 'option1', label: 'Opción 1', color: 'primary' }} />
            <Radio radioProps={{ value: 'option2', label: 'Opción 2', color: 'secondary' }} />
          </Radio>
        </div>
      </div>
    </div>
  );
}
