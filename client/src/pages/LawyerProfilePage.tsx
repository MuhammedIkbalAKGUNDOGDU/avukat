import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { lawyers } from '@/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, GraduationCap } from 'lucide-react';

export default function LawyerProfilePage() {
  const { lawyerId } = useParams<{ lawyerId: string }>();
  const { t } = useTranslation();

  const lawyer = lawyers.find((l) => l.id === Number(lawyerId));

  if (!lawyer) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground">Lawyer Not Found</h1>
          <Link href="/team">
            <Button variant="outline" className="mt-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-16" data-testid="section-lawyer-hero">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Link href="/team">
            <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
              <ArrowLeft className="h-4 w-4" />
              {t('nav.team')}
            </Button>
          </Link>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={lawyer.imageUrl}
                  alt={lawyer.name}
                  className="h-full w-full object-cover"
                  data-testid={`img-lawyer-profile-${lawyer.id}`}
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl" data-testid={`text-lawyer-name-${lawyer.id}`}>
                {lawyer.name}
              </h1>
              <p className="mt-3 text-xl font-medium text-ring" data-testid={`text-lawyer-title-${lawyer.id}`}>
                {t(lawyer.titleKey)}
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="gap-2" data-testid="button-contact-lawyer">
                    {t('hero.cta')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24" data-testid="section-lawyer-bio">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground" data-testid="text-bio-title">
                {t('lawyer.experience')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground" data-testid={`text-lawyer-bio-${lawyer.id}`}>
                {t(lawyer.bioKey)}
              </p>
            </div>
            <div className="lg:col-span-1">
              <Card data-testid="card-education">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    {t('lawyer.education')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" data-testid={`text-lawyer-education-${lawyer.id}`}>
                    {t(lawyer.educationKey)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
