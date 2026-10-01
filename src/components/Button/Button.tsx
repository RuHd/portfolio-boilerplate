import type { ButtonHTMLAttributes } from 'react';

// Estilos de cada variante. Para criar uma nova, adicione uma linha aqui.
const variants = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'border border-foreground',
  
};

// Aceita todas as props de um <button> comum (onClick, disabled...) + variant.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  text?: string
};

export function Button({ text, variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      // type="button" evita enviar um formulário sem querer.
      type="button"
      className={`rounded px-4 py-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
