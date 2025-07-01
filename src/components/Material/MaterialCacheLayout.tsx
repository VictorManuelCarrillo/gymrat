//? For fix CSS injection order for compatibility whit TailwinCSS

'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const CacheProv = ({ children }: { children: React.ReactNode }) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export const GlobalCssPriority = ({ children }: { children: React.ReactNode }) => {
  return (
    //? esto se puede des comentar si hay problemas con css
    // <StyledEngineProvider injectFirst>
    <CacheProv>
      {/* You can add another vendors if is required */}
      {children}
    </CacheProv>
    // </StyledEngineProvider>
  );
};
