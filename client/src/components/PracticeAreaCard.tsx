import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Heart, Scale, Home, Lightbulb, Briefcase } from 'lucide-react';
import type { PracticeArea } from '@/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Heart,
  Scale,
  Home,
  Lightbulb,
  Briefcase,
};

interface PracticeAreaCardProps {
  area: PracticeArea;
}

export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  const { t } = useTranslation();
  const IconComponent = iconMap[area.icon] || Scale;

  return (
    <Link href={`/practice-areas/${area.slug}`}>
      <Card className="group h-full transition-all duration-300 hover:shadow-lg hover-elevate" data-testid={`card-practice-area-${area.slug}`}>
        <CardHeader className="space-y-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
            <IconComponent className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-serif text-2xl">{t(area.titleKey)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-base leading-relaxed">
            {t(area.descriptionKey)}
          </CardDescription>
          <Button variant="ghost" className="group/btn gap-2 px-0" data-testid={`button-view-${area.slug}`}>
            {t('practiceArea.viewDetails')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
