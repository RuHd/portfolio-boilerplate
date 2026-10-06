import {
  FiArrowRight,
  FiArrowUp,
  FiArrowUpRight,
  FiExternalLink,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

import type { IconSource } from '@/components/ui/Icon';

/**
 * Registro de ícones (Inversão de Dependência).
 * Os componentes dependem da abstração `IconSource`, não do react-icons.
 * Trocar de biblioteca de ícones = trocar os imports deste arquivo.
 * Adicione novos ícones aqui conforme a necessidade.
 */
export const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  email: FiMail,
  externalLink: FiExternalLink,
  arrowRight: FiArrowRight,
  arrowUpRight: FiArrowUpRight,
  menu: FiMenu,
  close: FiX,
  arrowUp: FiArrowUp,
} satisfies Record<string, IconSource>;

export type IconName = keyof typeof icons;
