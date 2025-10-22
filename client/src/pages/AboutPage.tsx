import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Meta } from "@/components/Meta";
import { Shield, Award, Users } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      titleKey: "about.integrity",
      textKey: "about.integrityText",
    },
    {
      icon: Award,
      titleKey: "about.excellence",
      textKey: "about.excellenceText",
    },
    {
      icon: Users,
      titleKey: "about.clientFocus",
      textKey: "about.clientFocusText",
    },
  ];

  return (
    <>
      <Meta
        title={t("pageTitle.about")}
        description={t("about.description")}
        keywords="hukuk bürosu, avukat, hukuki hizmetler, deneyimli avukatlar, profesyonel hukuk"
      />
      <div className="flex flex-col">
        <section
          className="bg-primary py-20 text-primary-foreground md:py-24"
          data-testid="section-about-hero"
        >
          <div className="mx-auto max-w-4xl px-6 text-center md:px-8 lg:px-12">
            <h1
              className="font-serif text-5xl font-bold md:text-6xl"
              data-testid="text-about-title"
            >
              {t("about.title")}
            </h1>
            <p
              className="mt-6 text-xl text-primary-foreground/90 md:text-2xl"
              data-testid="text-about-subtitle"
            >
              {t("about.subtitle")}
            </p>
          </div>
        </section>

        <section
          className="bg-background py-20 md:py-24"
          data-testid="section-about-description"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <p
              className="text-lg leading-relaxed text-muted-foreground"
              data-testid="text-about-description"
            >
              {t("about.description")}
            </p>
          </div>
        </section>

        <section
          className="bg-muted py-20 md:py-24"
          data-testid="section-about-mission"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <h2
              className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl"
              data-testid="text-mission-title"
            >
              {t("about.mission")}
            </h2>
            <p
              className="text-lg leading-relaxed text-muted-foreground"
              data-testid="text-mission-description"
            >
              {t("about.missionText")}
            </p>
          </div>
        </section>

        <section
          className="bg-background py-20 md:py-24"
          data-testid="section-about-values"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <h2
              className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl"
              data-testid="text-values-title"
            >
              {t("about.values")}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="text-center"
                    data-testid={`card-value-${index}`}
                  >
                    <CardHeader className="items-center">
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <IconComponent className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-2xl">
                        {t(value.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {t(value.textKey)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
