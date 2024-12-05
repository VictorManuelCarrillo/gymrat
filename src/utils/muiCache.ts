//! for material UI
import createCache from '@emotion/cache';

const muiCache = createCache({
  key: 'mui',
  prepend: true, // Asegura que los estilos de Material UI sean prioritarios
});

export default muiCache;
