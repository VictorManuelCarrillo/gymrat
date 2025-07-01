'use client';
import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '~/components/Button';

export default function Home() {
  const handleClick = () => {
    alert('relajate mani');
  };

  const [open, setOpen] = useState(false);

  const handleClack = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: 'timeout' | 'clickaway' | 'escapeKeyDown') => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const action = (
    <Button onClick={handleClose} variant="text" color="inherit">
      Cerrar
    </Button>
  );

  return (
    <section>
      <div>
        <Button variant="contained">hola</Button>
        <Button variant="text">hola</Button>
        <Button variant="outlined">hola</Button>
        <Button variant="contained" color="error">
          hola
        </Button>
        <Button variant="contained" onClick={handleClick} color="info">
          hola
        </Button>
        <Button variant="contained" onClick={handleClick} color="inherit">
          hola
        </Button>
        <Button variant="contained" onClick={handleClick} color="primary">
          hola
        </Button>
        <Button variant="contained" onClick={handleClick} color="secondary">
          hola
        </Button>
        <Button
          href="https://forums.spacebattles.com/threads/miraculous-ninja-tales-of-heroes-and-magic-miraculous-ladybug-rc9gn-crossover.976879/#post-80124988"
          variant="contained"
          //onClick={handleClick}
          color="success"
        >
          hola
        </Button>
        <Button variant="contained" onClick={handleClick} color="warning">
          hola
        </Button>

        <Button variant="contained" onClick={handleClack}>
          que te peguen dice
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="vales verga vick" action={action} />
      </div>
    </section>
  );
}
