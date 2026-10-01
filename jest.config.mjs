import nextJest from 'next/jest.js';

// O next/jest já configura quase tudo para o Jest entender um projeto Next.js.
const createJestConfig = nextJest({ dir: './' });

const config = {
  // Simula um navegador para os testes de componentes.
  testEnvironment: 'jsdom',
  // Arquivo que roda antes de cada teste.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Faz o Jest entender imports com "@/", ex.: '@/components/Button'.
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
};

export default createJestConfig(config);
