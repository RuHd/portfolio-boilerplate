import type { Profile, Skill } from '@/types/portfolio';

/** Textos da apresentação. Substitua pelo seu conteúdo. */
export const profile: Profile = {
  eyebrow: 'Olá, eu sou Seu Nome',
  headline: 'Construo interfaces',
  highlight: 'rápidas, acessíveis e precisas.',
  summary:
    'Desenvolvedor front-end focado em React, Next.js e design systems. Transformo produtos complexos em experiências fluidas, do protótipo à produção.',
  availability: 'Disponível para novos projetos',
  about: [
    'Escreva aqui um parágrafo curto sobre sua trajetória: como começou, o que te motiva e que tipo de problema você gosta de resolver.',
    'Use um segundo parágrafo para contar como você trabalha — colaboração com design, cuidado com performance, testes e acessibilidade.',
  ],
};

export const skills: Skill[] = [
  { name: 'TypeScript', core: true },
  { name: 'React', core: true },
  { name: 'Next.js', core: true },
  { name: 'Tailwind CSS' },
  { name: 'Design Systems' },
  { name: 'Jest' },
  { name: 'Testing Library' },
  { name: 'Acessibilidade' },
  { name: 'Node.js' },
];
