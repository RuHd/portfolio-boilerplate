import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Badge } from './Badge';

describe('Badge', () => {
  it('usa o tom "tech" por padrão', () => {
    render(<Badge>TypeScript</Badge>);
    expect(screen.getByText('TypeScript')).toHaveClass('text-brand-sky', 'rounded-full', 'font-mono');
  });

  it('troca o tom sem vazar a prop para o DOM', () => {
    render(<Badge tone="metric">+140% perf</Badge>);
    const badge = screen.getByText('+140% perf');
    expect(badge).toHaveClass('text-brand-cyan');
    expect(badge).not.toHaveAttribute('tone');
  });

  it('renderiza o indicador como decorativo', () => {
    render(<Badge indicator>React</Badge>);
    expect(screen.getByText('React').querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Badge indicator>React</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
