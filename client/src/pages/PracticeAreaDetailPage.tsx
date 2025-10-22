import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { practiceAreas } from '@/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Heart, Scale, Home, Lightbulb, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Heart,
  Scale,
  Home,
  Lightbulb,
  Briefcase,
};

export default function PracticeAreaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground">Practice Area Not Found</h1>
          <Link href="/practice-areas">
            <Button variant="outline" className="mt-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Practice Areas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[area.icon] || Scale;

  return (
    <div className="flex flex-col">
      <section className="bg-primary py-16 text-primary-foreground md:py-20" data-testid="section-practice-area-hero">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <Link href="/practice-areas">
            <Button variant="ghost" className="mb-6 gap-2 text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-back">
              <ArrowLeft className="h-4 w-4" />
              {t('practiceArea.allAreas')}
            </Button>
          </Link>
          <div className="flex items-start gap-6">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-md bg-primary-foreground/10">
              <IconComponent className="h-10 w-10" />
            </div>
            <div>
              <h1 className="font-serif text-4xl font-bold md:text-5xl" data-testid="text-practice-area-title">
                {t(area.titleKey)}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90" data-testid="text-practice-area-desc">
                {t(area.descriptionKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24" data-testid="section-practice-area-details">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-practice-area-details">
              {t(area.fullDetailsKey)}
            </p>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-contact-cta">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
