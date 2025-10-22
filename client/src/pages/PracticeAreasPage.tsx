import { useTranslation } from "react-i18next";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { Meta } from "@/components/Meta";
import { practiceAreas } from "@/mockData";

export default function PracticeAreasPage() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t("pageTitle.practiceAreas")}
        description="Uzman avukatlarımızla şirketler hukuku, aile hukuku, ceza savunması ve daha fazlası için profesyonel hukuki hizmetler."
        keywords="hukuk alanları, şirketler hukuku, aile hukuku, ceza savunması, gayrimenkul hukuku, fikri mülkiyet, iş hukuku"
      />
      <div className="flex flex-col">
        <section
          className="bg-primary py-20 text-primary-foreground md:py-24"
          data-testid="section-practice-areas-hero"
        >
          <div className="mx-auto max-w-4xl px-6 text-center md:px-8 lg:px-12">
            <h1
              className="font-serif text-5xl font-bold md:text-6xl"
              data-testid="text-practice-areas-title"
            >
              {t("nav.practiceAreas")}
            </h1>
            <p
              className="mt-6 text-xl text-primary-foreground/90"
              data-testid="text-practice-areas-subtitle"
            >
              {t("hero.subtitle")}
            </p>
          </div>
        </section>

        <section
          className="bg-background py-20 md:py-24"
          data-testid="section-practice-areas-list"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => (
                <PracticeAreaCard key={area.id} area={area} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
