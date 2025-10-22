import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import type { Lawyer } from '@/mockData';

interface LawyerProfileCardProps {
  lawyer: Lawyer;
}

export function LawyerProfileCard({ lawyer }: LawyerProfileCardProps) {
  const { t } = useTranslation();

  return (
    <Link href={`/team/${lawyer.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover-elevate" data-testid={`card-lawyer-${lawyer.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={lawyer.imageUrl}
            alt={lawyer.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-lawyer-${lawyer.id}`}
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-serif text-2xl font-semibold text-foreground" data-testid={`text-lawyer-name-${lawyer.id}`}>
            {lawyer.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-ring" data-testid={`text-lawyer-title-${lawyer.id}`}>
            {t(lawyer.titleKey)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
