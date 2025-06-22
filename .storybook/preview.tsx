import { Preview } from '@storybook/react';

// Asegúrate de que 'GlobalCssPriority' esté correctamente importado desde la ruta correspondiente
import { GlobalCssPriority } from '../src/components/Material/MaterialCacheLayout';

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
