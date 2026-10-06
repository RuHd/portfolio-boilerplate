import { render, screen } from '@testing-library/react';

import { Heading } from './Heading';

describe('Heading', () => {
  it('renderiza o nível semântico correto', () => {
    render(<Heading level={3}>Projetos</Heading>);
    expect(screen.getByRole('heading', { level: 3, name: 'Projetos' })).toBeInTheDocument();
  });

  it('separa semântica (level) de aparência (size)', () => {
    render(
      <Heading level={1} size="headline-sm" id="titulo">
        Nome
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-headline-sm');
    expect(heading).toHaveAttribute('id', 'titulo');
    expect(heading).not.toHaveAttribute('size');
  });
});
