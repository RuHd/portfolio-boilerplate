import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Heading } from '@/components/ui/Heading';

import { Container } from './Container';
import { Section } from './Section';

describe('Container', () => {
  it('aplica largura máxima e troca o elemento', () => {
    render(
      <Container as="footer" size="sm" data-testid="c">
        conteúdo
      </Container>,
    );
    const element = screen.getByTestId('c');
    expect(element.tagName).toBe('FOOTER');
    expect(element).toHaveClass('max-w-2xl', 'mx-auto');
  });
});

describe('Section', () => {
  it('vira uma região nomeada quando ligada ao título', () => {
    render(
      <Section id="projetos" labelledBy="projetos-titulo" spacing="lg">
        <Heading level={2} id="projetos-titulo">
          Projetos
        </Heading>
      </Section>,
    );
    const region = screen.getByRole('region', { name: 'Projetos' });
    expect(region).toHaveAttribute('id', 'projetos');
    expect(region).toHaveClass('py-20', 'scroll-mt-24');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(
      <Section id="sobre" labelledBy="sobre-titulo">
        <Heading level={2} id="sobre-titulo">
          Sobre
        </Heading>
      </Section>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
