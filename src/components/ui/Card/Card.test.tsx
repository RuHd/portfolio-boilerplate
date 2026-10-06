import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  it('renderiza uma superfície de vidro nível 1 por padrão', () => {
    render(<Card data-testid="card">conteúdo</Card>);
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('DIV');
    expect(card).toHaveClass('bg-card/80', 'backdrop-blur-glass', 'border-border', 'rounded-lg');
  });

  it('ganha o estado de hover nível 2 quando interativo', () => {
    render(
      <Card as="article" elevation="interactive" radius="xl" data-testid="card">
        conteúdo
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('ARTICLE');
    expect(card).toHaveClass('hover:shadow-glow', 'rounded-xl');
    expect(card).not.toHaveAttribute('elevation');
  });
});
