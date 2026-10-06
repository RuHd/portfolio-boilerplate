import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Switch } from './Switch';

describe('Switch', () => {
  it('expõe role="switch" e alterna com clique e teclado', async () => {
    const onChange = jest.fn();
    render(<Switch label="Modo foco" onChange={onChange} />);
    const toggle = screen.getByRole('switch', { name: 'Modo foco' });
    expect(toggle).not.toBeChecked();

    await userEvent.click(screen.getByText('Modo foco'));
    expect(toggle).toBeChecked();

    toggle.focus();
    await userEvent.keyboard(' ');
    expect(toggle).not.toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('aplica o tamanho no trilho sem vazar a prop', () => {
    render(<Switch label="Compacto" size="sm" />);
    const toggle = screen.getByRole('switch');
    expect(toggle).not.toHaveAttribute('size');
    expect(toggle.nextElementSibling).toHaveClass('h-5', 'w-9');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Switch label="Modo foco" description="Esconde notificações" defaultChecked />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
