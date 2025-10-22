import { useTranslation } from "react-i18next";
import { LawyerProfileCard } from "@/components/LawyerProfileCard";
import { Meta } from "@/components/Meta";
import { lawyers } from "@/mockData";

export default function TeamPage() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t("pageTitle.team")}
        description="Deneyimli ve uzman avukatlarımızla tanışın. Her biri kendi alanında uzmanlaşmış profesyonel hukuk ekibimiz."
        keywords="avukat ekibi, deneyimli avukatlar, hukuk uzmanları, profesyonel avukatlar, hukuk bürosu ekibi"
      />
      <div className="flex flex-col">
        <section
          className="bg-primary py-20 text-primary-foreground md:py-24"
          data-testid="section-team-hero"
        >
          <div className="mx-auto max-w-4xl px-6 text-center md:px-8 lg:px-12">
            <h1
              className="font-serif text-5xl font-bold md:text-6xl"
              data-testid="text-team-title"
            >
              {t("nav.team")}
            </h1>
            <p
              className="mt-6 text-xl text-primary-foreground/90"
              data-testid="text-team-subtitle"
            >
              {t("home.teamTitle")}
            </p>
          </div>
        </section>

        <section
          className="bg-background py-20 md:py-24"
          data-testid="section-team-list"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {lawyers.map((lawyer) => (
                <LawyerProfileCard key={lawyer.id} lawyer={lawyer} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
