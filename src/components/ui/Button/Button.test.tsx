import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { extendVariants } from '@/utils/createVariants';

import { Button, createButton } from './Button';
import { buttonStyles } from './Button.styles';

describe('Button', () => {
  it('renderiza com type="button" por padrão (evita submit acidental)', () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByRole('button', { name: 'Enviar' })).toHaveAttribute('type', 'button');
  });

  it('repassa atributos nativos e chama onClick', async () => {
    const onClick = jest.fn();
    render(
      <Button type="submit" onClick={onClick} data-testid="btn">
        Enviar
      </Button>,
    );
    const button = screen.getByTestId('btn');
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('não vaza props de variante para o DOM', () => {
    render(
      <Button variant="ghost" size="sm">
        Ok
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('variant');
    expect(button).not.toHaveAttribute('size');
  });

  it('permite sobrescrever estilos com className', () => {
    render(<Button className="px-10">Ok</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-10');
    expect(button).not.toHaveClass('px-5');
  });

  it('desabilita e anuncia aria-busy durante o carregamento', async () => {
    const onClick = jest.fn();
    render(
      <Button isLoading onClick={onClick}>
        Salvar
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Salvar' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('esconde os slots de ícone de leitores de tela', () => {
    render(<Button leftIcon={<svg data-testid="icon" />}>Baixar</Button>);
    expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('button', { name: 'Baixar' })).toBeInTheDocument();
  });

  it('aceita variantes novas via factory (Aberto/Fechado)', () => {
    const BrandButton = createButton(
      extendVariants(buttonStyles, { variants: { variant: { brand: 'bg-purple-600' } } }),
    );
    render(<BrandButton variant="brand">Marca</BrandButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-purple-600');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Button>Enviar</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
