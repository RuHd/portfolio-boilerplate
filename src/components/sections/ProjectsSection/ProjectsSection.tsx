import { Container, Grid, Section } from '@/components/layout';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import type { Project } from '@/types/portfolio';

import { SectionHeader } from '../SectionHeader/SectionHeader';

export interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projetos" labelledBy="projetos-titulo">
      <Container>
        <SectionHeader
          id="projetos-titulo"
          eyebrow="02. projetos"
          title="Trabalhos selecionados"
          description="Uma seleção de projetos que mostram como penso arquitetura, performance e experiência."
        />
        <Grid as="ul" columns="cards">
          {projects.map((project) => (
            <li key={project.slug} className="flex">
              <ProjectCard project={project} className="w-full" />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
