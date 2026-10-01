import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('mostra o texto', () => {
    render(<Button>Enviar</Button>);

    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });

  it('chama o onClick ao clicar', () => {
    const handleClick = jest.fn(); // função "espiã" que registra se foi chamada

    render(<Button onClick={handleClick}>Enviar</Button>);
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalled();
  });
});
