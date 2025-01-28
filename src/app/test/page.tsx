'use client';

import { Button } from '~/shared/components/atoms/inputs/Button';
import { TextField } from '~/shared/components/atoms/inputs/TextField';

export default function TestPage() {
  return (
    <div>
      <p>test</p>
      <div>
        <TextField label="Currency" defaultValue="USD" helperText="Please select your currency" variant="filled" />
      </div>
      <Button>ola perro</Button>
    </div>
  );
}
