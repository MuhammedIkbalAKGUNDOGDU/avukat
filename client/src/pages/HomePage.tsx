import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { PracticeAreaCard } from '@/components/PracticeAreaCard';
import { LawyerProfileCard } from '@/components/LawyerProfileCard';
import { practiceAreas, lawyers } from '@/mockData';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/Law_office_hero_background_03f9726c.png';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section
        className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center md:px-8 lg:px-12">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground sm:text-6xl lg:text-7xl" data-testid="text-hero-title">
            {t('hero.title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/90 sm:text-2xl" data-testid="text-hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2 bg-background/10 text-lg backdrop-blur-sm" data-testid="button-hero-cta">
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24" data-testid="section-practice-areas">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl" data-testid="text-practice-areas-title">
              {t('home.practiceAreasTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 3).map((area) => (
              <PracticeAreaCard key={area.id} area={area} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/practice-areas">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-practice-areas">
                {t('practiceArea.allAreas')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-24" data-testid="section-team">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl" data-testid="text-team-title">
              {t('home.teamTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {lawyers.slice(0, 3).map((lawyer) => (
              <LawyerProfileCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/team">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-team">
                {t('nav.team')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
