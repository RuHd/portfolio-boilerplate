'use client';

import { useEffect, useId, useState } from 'react';

import { IconButton } from '@/components/ui/IconButton';
import { Link } from '@/components/ui/Link';
import { icons } from '@/config/icons';
import type { NavItem } from '@/types/portfolio';

export interface MobileNavProps {
  items: NavItem[];
}

/**
 * Menu da navegação em telas pequenas. Único trecho interativo do header:
 * o resto continua Server Component.
 */
export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <IconButton
        icon={open ? icons.close : icons.menu}
        label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      />
      {/* Fundo opaco: backdrop-filter não funciona dentro do header, que já tem blur. */}
      <nav
        id={panelId}
        aria-label="Menu"
        hidden={!open}
        className="absolute inset-x-0 top-full mt-space-sm rounded-lg border border-border bg-card p-space-sm shadow-float"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                variant="nav"
                className="flex w-full rounded-md px-space-md py-3 hover:bg-white/[0.04]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
