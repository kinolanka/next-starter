import { render, screen } from '@testing-library/react';
import Home from 'src/pages/index';

describe('Home', () => {
  xit('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /MUI v5 \+ Next\.js withd TypeScript example/i
    });

    expect(heading).toBeInTheDocument();
  });
});
