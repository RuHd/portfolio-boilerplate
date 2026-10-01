import { render, screen } from '@testing-library/react';
import { FiMenu } from 'react-icons/fi';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('usa o label como nome do botão', () => {
    render(<IconButton icon={FiMenu} label="Abrir menu" />);

    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument();
  });
});
