import type { ButtonHTMLAttributes } from 'react';
import type { IconType } from 'react-icons';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType;
  // Acessibilidade: um botão só com ícone não tem texto,
  // então o label é o que o leitor de tela vai falar.
  label: string;
};

export function IconButton({ icon: Icon, label, className = '', ...props }: IconButtonProps) {
  return (
    <button type="button" aria-label={label} className={`rounded p-2 ${className}`} {...props}>
      {/* aria-hidden: o ícone é só visual, o nome já está no aria-label. */}
      <Icon aria-hidden="true" />
    </button>
  );
}
