// Design tokens do sistema "Luminous Engineering" (Design.MD).

export const colors = {
  primary: '#00d2ff',
  secondary: '#a855f7',
  tertiary: '#3b82f6',
  neutral: '#070913',
} as const

export const typography = {
  headline: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#e1e1f1',
  },
  body: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#bbc9cf',
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    color: '#bbc9cf',
  },
} as const

export const buttons = {
  primary: {
    background: '#a5e7ff',
    color: '#003543',
    border: 'transparent',
  },
  secondary: {
    background: '#272935',
    color: '#bbc9cf',
    border: 'transparent',
  },
  inverted: {
    background: '#e1e1f1',
    color: '#2e303b',
    border: 'transparent',
  },
  outlined: {
    background: 'transparent',
    color: '#bbc9cf',
    border: '#859399',
  },
  // Botão de ícone quadrado (lápis).
  icon: {
    background: '#a5c1ff',
    color: '#004ba5',
    border: 'transparent',
  },
  // Botão com ícone e texto ("Label").
  label: {
    background: '#00d2ff',
    color: '#00566a',
    border: 'transparent',
  },
  // Botões de ícone redondos.
  round: {
    primary: { background: '#a5e7ff', color: '#003543' },
    secondary: { background: '#ddb7ff', color: '#490080' },
    tertiary: { background: '#d0ddff', color: '#002e6a' },
    error: { background: '#ffb4ab', color: '#690005' },
  },
} as const

export const tokens = { colors, typography, buttons } as const

export type ColorToken = keyof typeof colors
export type TypographyToken = keyof typeof typography
export type ButtonVariant = Exclude<keyof typeof buttons, 'round'>
export type RoundButtonVariant = keyof typeof buttons.round
