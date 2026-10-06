import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  ProjectsSection,
} from '@/components/sections';
import { siteConfig } from '@/config/site';
import { contactChannels, education, profile, projects, skills } from '@/content';

/**
 * Página única da SPA. Só compõe seções: o conteúdo vem de src/content
 * e a aparência dos componentes. Navegação entre seções por âncoras (#id).
 *
 * A página tem exatamente um <h1> (dentro do HeroSection).
 */
export default function HomePage() {
  return (
    <>
      <HeroSection
        profile={profile}
        name={siteConfig.author.name}
        skills={skills}
        primaryCta={{ label: 'Ver projetos', href: '#projetos' }}
        secondaryCta={{ label: 'Entrar em contato', href: '#contato' }}
      />
      <AboutSection paragraphs={profile.about} skills={skills} />
      <ProjectsSection projects={projects} />
      <EducationSection items={education} />
      <ContactSection channels={contactChannels} />
    </>
  );
}
