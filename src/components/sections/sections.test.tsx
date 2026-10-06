import { render, screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';

import HomePage from '@/app/page';
import { projects } from '@/content';

import { ProjectsSection } from './ProjectsSection/ProjectsSection';

describe('HomePage', () => {
  it('tem exatamente um h1 e uma região nomeada por seção', () => {
    render(<HomePage />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    for (const name of ['Engenharia com acabamento de produto', 'Trabalhos selecionados', 'Formação']) {
      expect(screen.getByRole('region', { name })).toBeInTheDocument();
    }
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<HomePage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('ProjectsSection', () => {
  it('renderiza um card por projeto com stack, métrica e links nomeados', () => {
    render(<ProjectsSection projects={projects} />);
    const [first] = projects;
    const card = screen.getByRole('article', { name: first.title });

    expect(within(card).getByRole('list', { name: 'Tecnologias' }).children).toHaveLength(
      first.technologies.length,
    );
    expect(within(card).getByText(first.metric!)).toHaveClass('text-brand-cyan');
    expect(within(card).getByRole('link', { name: /Código de Painel de Analytics/ })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
