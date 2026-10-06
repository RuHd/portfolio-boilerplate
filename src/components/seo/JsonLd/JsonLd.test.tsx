import { render } from '@testing-library/react';

import { JsonLd } from './JsonLd';

describe('JsonLd', () => {
  it('injeta um script application/ld+json com os dados', () => {
    const { container } = render(<JsonLd data={{ '@type': 'Person', name: 'Ana' }} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(JSON.parse(script?.innerHTML ?? '{}')).toEqual({ '@type': 'Person', name: 'Ana' });
  });
});
