import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('é um checkbox nativo nomeado pelo label', async () => {
    render(<Checkbox label="Aceito receber novidades" name="news" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Aceito receber novidades' });
    expect(checkbox).toHaveAttribute('name', 'news');
    await userEvent.click(screen.getByText('Aceito receber novidades'));
    expect(checkbox).toBeChecked();
  });

  it('liga a descrição via aria-describedby', () => {
    render(<Checkbox label="Remoto" description="Somente vagas remotas" />);
    expect(screen.getByRole('checkbox')).toHaveAccessibleDescription('Somente vagas remotas');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Checkbox label="Remoto" description="Somente vagas remotas" defaultChecked />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
