import { render, screen } from '@testing-library/react';

import { MAIN_CONTENT_ID } from '@/config/a11y';

import { SkipLink } from './SkipLink';
import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('mantém o texto acessível com a classe sr-only', () => {
    render(<VisuallyHidden>texto oculto</VisuallyHidden>);
    expect(screen.getByText('texto oculto')).toHaveClass('sr-only');
  });
});

describe('SkipLink', () => {
  it('aponta para o conteúdo principal por padrão', () => {
    render(<SkipLink />);
    expect(screen.getByRole('link', { name: 'Pular para o conteúdo principal' })).toHaveAttribute(
      'href',
      `#${MAIN_CONTENT_ID}`,
    );
  });

  it('aceita destino e texto personalizados', () => {
    render(<SkipLink targetId="contato">Ir para contato</SkipLink>);
    expect(screen.getByRole('link', { name: 'Ir para contato' })).toHaveAttribute('href', '#contato');
  });
});
