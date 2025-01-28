import { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/main.scss';

// Asegúrate de que 'GlobalCssPriority' esté correctamente importado desde la ruta correspondiente
import { GlobalCssPriority } from '../src/common/components/templates/material/MaterialCacheLayout';

const preview: Preview = {
  decorators: [
    (Story) => (
      <GlobalCssPriority>
        <Story />
      </GlobalCssPriority>
    ),
  ],
  parameters: {
    // Puedes agregar configuraciones globales aquí, como la de controles o temas.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
