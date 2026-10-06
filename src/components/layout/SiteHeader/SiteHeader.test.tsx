import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { SiteHeader } from './SiteHeader';

const items = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
];

describe('SiteHeader', () => {
  it('renderiza a navegação principal e a chamada', () => {
    render(<SiteHeader brand="Ana" items={items} cta={{ label: 'Contato', href: '#contato' }} />);
    const nav = screen.getByRole('navigation', { name: 'Principal' });
    expect(nav).toContainElement(screen.getAllByRole('link', { name: 'Sobre' })[0]);
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#contato');
  });

  it('abre e fecha o menu mobile (clique, Escape e seleção de item)', async () => {
    render(<SiteHeader brand="Ana" items={items} />);
    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument();

    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Menu' })).toBeVisible();

    await userEvent.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
    const menu = screen.getByRole('navigation', { name: 'Menu' });
    await userEvent.click(menu.querySelector('a')!);
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument();
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<SiteHeader brand="Ana" items={items} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
