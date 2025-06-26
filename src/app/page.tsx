'use client';
import { Button } from '~/components/Button';

export default function Home() {
  const handleClick = () => {
    alert('relajate mani');
  };

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
      </div>
    </section>
  );
}
