import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('Text', () => {
  it('renderiza um parágrafo por padrão', () => {
    render(<Text>Olá</Text>);
    expect(screen.getByText('Olá').tagName).toBe('P');
  });

  it('troca o elemento e aplica o tom', () => {
    render(
      <Text as="span" tone="muted" size="body-sm">
        Detalhe
      </Text>,
    );
    const element = screen.getByText('Detalhe');
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass('text-muted-foreground', 'text-body-sm');
    expect(element).not.toHaveAttribute('tone');
  });
});
