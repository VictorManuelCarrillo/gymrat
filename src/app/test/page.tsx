import { MenuItem, FormControl, InputLabel } from '@mui/material';
import { Select } from '~/components/atoms/inputs/Select';
import { Slider } from '~/components/atoms/inputs/Slider';

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
      <div>
        <Slider aria-label="Temperature" defaultValue={30} valueLabelDisplay="auto" shiftStep={30} step={10} marks min={10} max={110} />
      </div>
    </div>
  );
}
