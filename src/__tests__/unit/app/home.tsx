import { render } from '@testing-library/react';
import Home from '~/app/page';
it('renders home page', () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
