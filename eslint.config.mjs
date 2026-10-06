import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // O plugin jsx-a11y já vem registrado pelo eslint-config-next, mas só com parte
  // das regras. Aqui ativamos o conjunto recomendado completo.
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'next-env.d.ts']),
]);

export default eslintConfig;
