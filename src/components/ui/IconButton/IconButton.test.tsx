import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FiMenu } from 'react-icons/fi';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('usa o label como nome acessível e esconde o ícone', () => {
    const { container } = render(<IconButton icon={FiMenu} label="Abrir menu" />);
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument();
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('herda o comportamento do Button', async () => {
    const onClick = jest.fn();
    render(<IconButton icon={FiMenu} label="Menu" onClick={onClick} aria-expanded={false} />);
    const button = screen.getByRole('button', { name: 'Menu' });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('usa tamanhos quadrados e a variante ghost por padrão', () => {
    render(<IconButton icon={FiMenu} label="Menu" size="lg" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('size-12', 'bg-transparent');
    expect(button).not.toHaveClass('px-6');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<IconButton icon={FiMenu} label="Abrir menu" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
