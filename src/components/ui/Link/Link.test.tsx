import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Link } from './Link';

describe('Link', () => {
  it('renderiza rota interna sem abrir nova aba', () => {
    render(<Link href="/curriculo">Currículo</Link>);
    const link = screen.getByRole('link', { name: 'Currículo' });
    expect(link).toHaveAttribute('href', '/curriculo');
    expect(link).not.toHaveAttribute('target');
  });

  it('abre links externos em nova aba com rel seguro e aviso acessível', () => {
    render(<Link href="https://github.com/usuario">GitHub</Link>);
    const link = screen.getByRole('link', { name: 'GitHub (abre em nova aba)' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('mantém âncoras e mailto na mesma aba', () => {
    render(
      <>
        <Link href="#projetos">Projetos</Link>
        <Link href="mailto:eu@email.com">E-mail</Link>
      </>,
    );
    expect(screen.getByRole('link', { name: 'Projetos' })).not.toHaveAttribute('target');
    expect(screen.getByRole('link', { name: 'E-mail' })).toHaveAttribute('href', 'mailto:eu@email.com');
  });

  it('permite forçar ou impedir nova aba com a prop external', () => {
    render(
      <>
        <Link href="/cv.pdf" external newTabLabel="(nova janela)">
          CV
        </Link>
        <Link href="https://exemplo.com" external={false}>
          Exemplo
        </Link>
      </>,
    );
    expect(screen.getByRole('link', { name: 'CV (nova janela)' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'Exemplo' })).not.toHaveAttribute('target');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Link href="https://github.com">GitHub</Link>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
