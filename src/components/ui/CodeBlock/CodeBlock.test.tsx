import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { CodeBlock, CodeToken } from './CodeBlock';

function Example() {
  return (
    <CodeBlock title="stack.ts">
      <CodeToken kind="key">const</CodeToken> <CodeToken kind="variable">stack</CodeToken>{' '}
      <CodeToken kind="operator">=</CodeToken> <CodeToken kind="string">&apos;next&apos;</CodeToken>;
      {'\n'}
      <CodeToken kind="comment">{'// comentário'}</CodeToken>
    </CodeBlock>
  );
}

describe('CodeBlock', () => {
  it('mostra o título na barra da janela e nomeia a região de código', () => {
    render(<Example />);
    expect(screen.getByText('stack.ts').tagName).toBe('FIGCAPTION');
    const pre = screen.getByText('stack', { selector: 'span' }).closest('pre');
    expect(pre).toHaveAttribute('tabindex', '0');
    expect(pre).toHaveAccessibleName('stack.ts');
  });

  it('colore os tokens com os acentos do sistema', () => {
    render(<Example />);
    expect(screen.getByText('const')).toHaveClass('text-brand-cyan');
    expect(screen.getByText('=')).toHaveClass('text-brand-violet');
    expect(screen.getByText('stack', { selector: 'span' })).toHaveClass('text-brand-blue');
    expect(screen.getByText('// comentário')).toHaveClass('text-subtle-foreground');
  });

  it('não tem violações de acessibilidade', async () => {
    const { container } = render(<Example />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
