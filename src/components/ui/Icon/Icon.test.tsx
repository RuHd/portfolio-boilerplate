import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { FaGithub } from 'react-icons/fa6';

import { extendVariants } from '@/utils/createVariants';

import { createIcon, Icon } from './Icon';
import { iconStyles } from './Icon.styles';

describe('Icon', () => {
  it('é decorativo por padrão (escondido de leitores de tela)', () => {
    const { container } = render(<Icon as={FaGithub} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
  });

  it('vira imagem acessível quando recebe label', () => {
    render(<Icon as={FaGithub} label="GitHub" />);
    expect(screen.getByRole('img', { name: 'GitHub' })).toBeInTheDocument();
  });

  it('aceita qualquer componente que cumpra o contrato IconSource', () => {
    const CustomSvg = (props: object) => <svg data-testid="custom" {...props} />;
    render(<Icon as={CustomSvg} size="lg" />);
    expect(screen.getByTestId('custom')).toHaveClass('size-6');
  });

  it('pode ganhar tamanhos novos via factory, sem editar o componente', () => {
    const HugeIcon = createIcon(extendVariants(iconStyles, { variants: { size: { huge: 'size-16' } } }));
    const { container } = render(<HugeIcon as={FaGithub} size="huge" />);
    expect(container.querySelector('svg')).toHaveClass('size-16');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Icon as={FaGithub} label="GitHub" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
