import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { TextField } from './TextField';

describe('TextField', () => {
  it('liga o label ao campo e repassa atributos nativos', async () => {
    render(<TextField id="email" label="E-mail" type="email" placeholder="voce@email.com" />);
    const input = screen.getByLabelText('E-mail');
    expect(input).toHaveAttribute('type', 'email');
    await userEvent.type(input, 'ana@ana.dev');
    expect(input).toHaveValue('ana@ana.dev');
  });

  it('descreve o campo com ajuda e erro', () => {
    render(<TextField id="nome" label="Nome" hint="Como prefere ser chamado" error="Obrigatório" />);
    const input = screen.getByLabelText('Nome');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Como prefere ser chamado Obrigatório');
  });

  it('não vaza a prop de tamanho para o DOM', () => {
    render(<TextField id="x" label="X" size="sm" />);
    const input = screen.getByLabelText('X');
    expect(input).toHaveClass('h-9');
    expect(input).not.toHaveAttribute('size');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<TextField id="email" label="E-mail" hint="Nunca compartilhado" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
