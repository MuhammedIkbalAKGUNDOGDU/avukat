import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 hover-elevate rounded-md px-3 py-2" data-testid="link-footer-logo">
              <Scale className="h-8 w-8" />
              <span className="font-serif text-2xl font-bold">LawFirm</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover-elevate inline-block rounded-md px-3 py-1.5 text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-home">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover-elevate inline-block rounded-md px-3 py-1.5 text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-about">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover-elevate inline-block rounded-md px-3 py-1.5 text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-practice-areas">
                  {t('nav.practiceAreas')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover-elevate inline-block rounded-md px-3 py-1.5 text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-team">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover-elevate inline-block rounded-md px-3 py-1.5 text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-contact">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
