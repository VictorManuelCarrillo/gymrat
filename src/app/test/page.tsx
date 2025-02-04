'use client';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import { Select } from '~/components/atoms/inputs/Select';

export default function TestPage() {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">ola</InputLabel>
          <Select labelId="demo-simple-select-label" sx={{ width: '500px' }}>
            <MenuItem>ola</MenuItem>
            <MenuItem>ola</MenuItem>
            <MenuItem>ola</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
