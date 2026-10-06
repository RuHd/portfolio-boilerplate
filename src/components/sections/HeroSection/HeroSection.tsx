import { Container, Grid, Section } from '@/components/layout';
import { Badge } from '@/components/ui/Badge';
import { buttonStyles } from '@/components/ui/Button';
import { CodeBlock, CodeToken } from '@/components/ui/CodeBlock';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { Link } from '@/components/ui/Link';
import { Text } from '@/components/ui/Text';
import { icons } from '@/config/icons';
import type { NavItem, Profile, Skill } from '@/types/portfolio';

export interface HeroSectionProps {
  profile: Profile;
  name: string;
  skills: Skill[];
  primaryCta: NavItem;
  secondaryCta?: NavItem;
}

export function HeroSection({ profile, name, skills, primaryCta, secondaryCta }: HeroSectionProps) {
  const coreSkills = skills.filter((skill) => skill.core).map((skill) => skill.name);

  return (
    <Section id="inicio" labelledBy="inicio-titulo" spacing="lg" className="relative isolate overflow-hidden">
      {/* Lavagens de luz decorativas (ciano → violeta). */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 size-[32rem] rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 size-[28rem] rounded-full bg-brand-violet/10 blur-3xl" />
      </div>

      <Container>
        <Grid columns="split" className="items-center">
          <div className="flex flex-col items-start gap-space-lg">
            {profile.availability && (
              <Badge tone="metric" indicator>
                {profile.availability}
              </Badge>
            )}
            <Text as="span" size="label-lg" tone="muted">
              {profile.eyebrow}
            </Text>
            <Heading level={1} size="display" id="inicio-titulo">
              {profile.headline}{' '}
              {profile.highlight && <span className="text-gradient-brand">{profile.highlight}</span>}
            </Heading>
            <Text size="body-lg" tone="muted" className="max-w-xl">
              {profile.summary}
            </Text>
            <div className="flex flex-wrap gap-space-md">
              <Link href={primaryCta.href} variant="unstyled" className={buttonStyles({ size: 'lg' })}>
                {primaryCta.label}
                <Icon as={icons.arrowRight} size="sm" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  variant="unstyled"
                  className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          <CodeBlock title="~/perfil.ts" className="w-full lg:ml-auto lg:max-w-lg">
            <CodeToken kind="operator">const</CodeToken> <CodeToken kind="variable">dev</CodeToken>{' '}
            <CodeToken kind="operator">=</CodeToken> {'{'}
            {'\n  '}
            <CodeToken kind="key">nome</CodeToken>: <CodeToken kind="string">&apos;{name}&apos;</CodeToken>,
            {'\n  '}
            <CodeToken kind="key">stack</CodeToken>: [
            {coreSkills.map((skill, index) => (
              <span key={skill}>
                <CodeToken kind="string">&apos;{skill}&apos;</CodeToken>
                {index < coreSkills.length - 1 && ', '}
              </span>
            ))}
            ],
            {'\n  '}
            <CodeToken kind="function">construir</CodeToken>
            <CodeToken kind="operator">()</CodeToken> {'{ '}
            <CodeToken kind="operator">return</CodeToken>{' '}
            <CodeToken kind="string">&apos;interfaces precisas&apos;</CodeToken>
            {' },'}
            {'\n};\n\n'}
            <CodeToken kind="comment">{'// ' + (profile.availability ?? 'vamos conversar?')}</CodeToken>
          </CodeBlock>
        </Grid>
      </Container>
    </Section>
  );
}
