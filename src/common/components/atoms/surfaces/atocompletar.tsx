'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Autocomplete as MuiAutocomplete} from '@mui/material';

export default function Autocomplete() {

  const arr = [{label: 'ola', value: '1'}]

  return (
    <MuiAutocomplete
      disablePortal
      options={arr}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="options" />}
    />
  );
}