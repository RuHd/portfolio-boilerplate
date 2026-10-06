import { Container, Grid, Section } from '@/components/layout';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { Skill } from '@/types/portfolio';

import { SectionHeader } from '../SectionHeader/SectionHeader';

export interface AboutSectionProps {
  paragraphs: string[];
  skills: Skill[];
}

export function AboutSection({ paragraphs, skills }: AboutSectionProps) {
  return (
    <Section id="sobre" labelledBy="sobre-titulo">
      <Container>
        <SectionHeader id="sobre-titulo" eyebrow="01. sobre" title="Engenharia com acabamento de produto" />
        <Grid>
          <div className="col-span-4 flex flex-col gap-space-md md:col-span-8 lg:col-span-7">
            {paragraphs.map((paragraph) => (
              <Text key={paragraph} size="body-lg" tone="muted">
                {paragraph}
              </Text>
            ))}
          </div>
          <Card className="col-span-4 md:col-span-8 lg:col-span-5">
            <Heading level={3} size="headline-sm" className="mb-space-md">
              Stack principal
            </Heading>
            <ul className="flex flex-wrap gap-space-sm">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <Badge indicator={skill.core}>{skill.name}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
