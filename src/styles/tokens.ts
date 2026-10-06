/**
 * Design tokens do sistema "Luminous Engineering" (espelho em TypeScript).
 *
 * A fonte usada pelo Tailwind é `src/styles/tokens.css`. Este arquivo existe para
 * código que precisa dos valores em JS (manifest, themeColor, OG images, testes).
 * `tokens.test.ts` garante que os dois arquivos não saiam de sincronia.
 */

/** Paleta tonal completa (Material 3) gerada a partir das cores da marca. */
export const palette = {
  surface: '#11131d',
  'surface-dim': '#11131d',
  'surface-bright': '#373944',
  'surface-container-lowest': '#0b0e18',
  'surface-container-low': '#191b26',
  'surface-container': '#1d1f2a',
  'surface-container-high': '#272935',
  'surface-container-highest': '#323440',
  'on-surface': '#e1e1f1',
  'on-surface-variant': '#bbc9cf',
  'inverse-surface': '#e1e1f1',
  'inverse-on-surface': '#2e303b',
  outline: '#859399',
  'outline-variant': '#3c494e',
  'surface-tint': '#47d6ff',
  primary: '#a5e7ff',
  'on-primary': '#003543',
  'primary-container': '#00d2ff',
  'on-primary-container': '#00566a',
  'inverse-primary': '#00677f',
  secondary: '#ddb7ff',
  'on-secondary': '#490080',
  'secondary-container': '#6f00be',
  'on-secondary-container': '#d6a9ff',
  tertiary: '#d0ddff',
  'on-tertiary': '#002e6a',
  'tertiary-container': '#a5c1ff',
  'on-tertiary-container': '#004ba5',
  error: '#ffb4ab',
  'on-error': '#690005',
  'error-container': '#93000a',
  'on-error-container': '#ffdad6',
  'primary-fixed': '#b6ebff',
  'primary-fixed-dim': '#47d6ff',
  'on-primary-fixed': '#001f28',
  'on-primary-fixed-variant': '#004e60',
  'secondary-fixed': '#f0dbff',
  'secondary-fixed-dim': '#ddb7ff',
  'on-secondary-fixed': '#2c0051',
  'on-secondary-fixed-variant': '#6900b3',
  'tertiary-fixed': '#d8e2ff',
  'tertiary-fixed-dim': '#adc6ff',
  'on-tertiary-fixed': '#001a42',
  'on-tertiary-fixed-variant': '#004395',
  background: '#11131d',
  'on-background': '#e1e1f1',
  'surface-variant': '#323440',
} as const;

/** Cores de marca e de interface usadas diretamente pelos componentes. */
export const brand = {
  cyan: '#00d2ff',
  violet: '#a855f7',
  blue: '#3b82f6',
  sky: '#38bdf8',
  /** Nível 0 — fundo da página. */
  canvas: '#070913',
  /** Nível 1 — cards e superfícies de vidro. */
  card: '#0d111d',
  /** Nível 2 — hover e estados ativos. */
  'card-hover': '#141b2d',
  code: '#05070d',
  field: '#0a0e18',
  foreground: '#f1f5f9',
  'muted-foreground': '#94a3b8',
  'subtle-foreground': '#64748b',
} as const;

export const typography = {
  display: { fontFamily: 'Plus Jakarta Sans', fontSize: '56px', fontWeight: 800, lineHeight: '64px' },
  'display-mobile': { fontFamily: 'Plus Jakarta Sans', fontSize: '36px', fontWeight: 800, lineHeight: '44px' },
  'headline-lg': { fontFamily: 'Plus Jakarta Sans', fontSize: '40px', fontWeight: 700, lineHeight: '48px' },
  'headline-lg-mobile': { fontFamily: 'Plus Jakarta Sans', fontSize: '28px', fontWeight: 700, lineHeight: '36px' },
  'headline-md': { fontFamily: 'Plus Jakarta Sans', fontSize: '24px', fontWeight: 600, lineHeight: '32px' },
  'headline-sm': { fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: 600, lineHeight: '28px' },
  'body-lg': { fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: 400, lineHeight: '28px' },
  'body-md': { fontFamily: 'Plus Jakarta Sans', fontSize: '15px', fontWeight: 400, lineHeight: '24px' },
  'body-sm': { fontFamily: 'Plus Jakarta Sans', fontSize: '13px', fontWeight: 400, lineHeight: '20px' },
  'label-lg': { fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: 500, lineHeight: '20px' },
  'label-md': { fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 500, lineHeight: '16px' },
  'label-sm': { fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 400, lineHeight: '14px' },
} as const;

export const radius = {
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

export const spacing = {
  gutter: '1.5rem',
  'gutter-mobile': '1rem',
  margin: '2.5rem',
  'margin-mobile': '1.25rem',
  'space-xs': '0.25rem',
  'space-sm': '0.5rem',
  'space-md': '1rem',
  'space-lg': '1.5rem',
  'space-xl': '2.5rem',
  section: '5rem',
} as const;

export const shadows = {
  glow: '0 8px 32px -4px rgb(0 210 255 / 0.12), 0 0 16px -2px rgb(168 85 247 / 0.12)',
  'glow-cyan': '0 0 20px rgb(0 210 255 / 0.4)',
  'glow-violet': '0 0 24px -4px rgb(168 85 247 / 0.35)',
  float: '0 20px 40px rgb(0 0 0 / 0.6)',
  focus: '0 0 0 3px rgb(0 210 255 / 0.15)',
} as const;

export const blurs = {
  glass: '12px',
  card: '16px',
  nav: '20px',
} as const;

export const tokens = { palette, brand, typography, radius, spacing, shadows, blurs } as const;
