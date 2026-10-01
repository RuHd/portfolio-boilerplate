import { render, screen } from '@testing-library/react';

import { Heading } from './Heading';

describe('Heading', () => {
  it('renderiza um h2 por padrão', () => {
    render(<Heading>Projetos</Heading>);

    expect(screen.getByRole('heading', { level: 2, name: 'Projetos' })).toBeInTheDocument();
  });

  it('usa o nível passado em "as"', () => {
    render(<Heading as="h1">Olá</Heading>);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('usa o tamanho padrão do nível quando não recebe size', () => {
    render(<Heading as="h1">Olá</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('text-4xl');
  });

  it('separa o tamanho visual do nível semântico', () => {
    render(
      <Heading as="h3" size="2xl">
        Sobre
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveClass('text-4xl');
    expect(heading).not.toHaveClass('text-2xl');
  });

  it('aplica weight, align e className extra', () => {
    render(
      <Heading weight="medium" align="center" className="mb-4">
        Contato
      </Heading>,
    );

    expect(screen.getByRole('heading')).toHaveClass('font-medium', 'text-center', 'mb-4');
  });

  it('repassa atributos HTML nativos', () => {
    render(<Heading id="contato">Contato</Heading>);

    expect(screen.getByRole('heading')).toHaveAttribute('id', 'contato');
  });
});
