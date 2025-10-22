import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { LawyerProfileCard } from "@/components/LawyerProfileCard";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { Meta } from "@/components/Meta";
import { practiceAreas, lawyers } from "@/mockData";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Law_office_hero_background_03f9726c.png";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t("pageTitle.home")}
        description={t("hero.subtitle")}
        keywords="hukuk, avukat, hukuki danışmanlık, şirketler hukuku, aile hukuku, ceza savunması, gayrimenkul hukuku"
      />
      <div className="flex flex-col">
        <section
          className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="section-hero"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center md:px-8 lg:px-12">
            <AnimatedText
              as="h1"
              className="font-serif text-5xl font-bold text-primary-foreground sm:text-6xl lg:text-7xl"
              data-testid="text-hero-title"
            >
              {t("hero.title")}
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={200}
              className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/90 sm:text-2xl"
              data-testid="text-hero-subtitle"
            >
              {t("hero.subtitle")}
            </AnimatedText>
            <AnimatedSection delay={400} className="mt-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-background/10 text-lg backdrop-blur-sm"
                  data-testid="button-hero-cta"
                >
                  {t("hero.cta")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <section
          className="bg-background py-20 md:py-24"
          data-testid="section-practice-areas"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <AnimatedSection className="mb-12 text-center">
              <AnimatedText
                as="h2"
                className="font-serif text-4xl font-bold text-foreground md:text-5xl"
                data-testid="text-practice-areas-title"
              >
                {t("home.practiceAreasTitle")}
              </AnimatedText>
            </AnimatedSection>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.slice(0, 3).map((area, index) => (
                <AnimatedSection key={area.id} delay={index * 200}>
                  <PracticeAreaCard area={area} />
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={600} className="mt-12 text-center">
              <Link href="/practice-areas">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  data-testid="button-view-all-practice-areas"
                >
                  {t("practiceArea.allAreas")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-muted py-20 md:py-24" data-testid="section-team">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <AnimatedSection className="mb-12 text-center">
              <AnimatedText
                as="h2"
                className="font-serif text-4xl font-bold text-foreground md:text-5xl"
                data-testid="text-team-title"
              >
                {t("home.teamTitle")}
              </AnimatedText>
            </AnimatedSection>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {lawyers.slice(0, 3).map((lawyer, index) => (
                <AnimatedSection key={lawyer.id} delay={index * 200}>
                  <LawyerProfileCard lawyer={lawyer} />
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={600} className="mt-12 text-center">
              <Link href="/team">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  data-testid="button-view-all-team"
                >
                  {t("nav.team")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <AnimatedSection
          className="bg-gradient-to-br from-background via-background to-muted/30 py-20 md:py-24"
          data-testid="section-contact-form"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left side - Content */}
              <div className="space-y-6">
                <AnimatedText className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  {t("home.contactForm.title")}
                </AnimatedText>
                <AnimatedText className="text-lg text-muted-foreground leading-relaxed">
                  {t("home.contactForm.subtitle")}
                </AnimatedText>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">
                      {t("home.contactForm.features.quickResponse")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">
                      {t("home.contactForm.features.freeConsultation")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">
                      {t("home.contactForm.features.privacy")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <AnimatedSection>
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-6 md:p-8">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
