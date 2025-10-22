import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// Fallback resources to prevent missing key errors
const fallbackResources = {
  tr: {
    translation: {
      nav: {
        home: "Anasayfa",
        about: "Hakkımızda",
        practiceAreas: "Çalışma Alanları",
        team: "Ekibimiz",
        contact: "İletişim",
      },
      pageTitle: {
        home: "Anasayfa - LawFirm",
        about: "Hakkımızda - LawFirm",
        practiceAreas: "Çalışma Alanları - LawFirm",
        team: "Ekibimiz - LawFirm",
        contact: "İletişim - LawFirm",
      },
      hero: {
        title: "Güvenebileceğiniz Uzman Hukuki Çözümler",
        subtitle:
          "Bireyler ve işletmeler için kapsamlı hukuki hizmetler sunuyoruz.",
        cta: "Ücretsiz Danışmanlık Alın",
      },
      home: {
        practiceAreasTitle: "Çalışma Alanlarımız",
        teamTitle: "Uzman Avukatlarımızla Tanışın",
        contactForm: {
          title: "Bizimle İletişim Kurun",
          subtitle: "Hukuki danışmanlık için hemen iletişime geçin",
          name: "Ad Soyad",
          email: "E-posta",
          phone: "Telefon",
          subject: "Konu",
          message: "Mesajınız",
          submit: "Gönder",
          sending: "Gönderiliyor...",
          success: "Mesajınız başarıyla gönderildi!",
          error: "Mesaj gönderilirken bir hata oluştu.",
          required: "Bu alan zorunludur",
          invalidEmail: "Geçerli bir e-posta adresi girin",
          minLength: "En az {{min}} karakter olmalıdır",
          placeholders: {
            name: "Adınız ve soyadınız",
            email: "ornek@email.com",
            phone: "+90 555 123 45 67",
            subject: "Konu başlığı",
            message: "Mesajınızı buraya yazın...",
          },
          features: {
            quickResponse: "Hızlı yanıt garantisi",
            freeConsultation: "Ücretsiz ilk danışmanlık",
            privacy: "Gizlilik garantisi",
          },
        },
      },
      practiceArea: {
        viewDetails: "Detayları Görüntüle",
        allAreas: "Tüm Çalışma Alanları",
        corporate_law_title: "Şirketler Hukuku",
        corporate_law_desc:
          "Birleşme, devralmalar ve kurumsal yönetim konularında uzman tavsiyesi.",
        family_law_title: "Aile Hukuku",
        family_law_desc:
          "Boşanma, velayet ve aile içi anlaşmazlıklar için profesyonel destek.",
        criminal_defense_title: "Ceza Savunması",
        criminal_defense_desc:
          "Ceza davalarında güçlü savunma ve adil yargılanma hakkınızı koruyoruz.",
      },
      lawyer: {
        jane_doe_title: "Şirketler Hukuku Uzmanı",
        john_smith_title: "Aile Hukuku Uzmanı",
        sarah_johnson_title: "Ceza Savunması Uzmanı",
      },
      footer: {
        quickLinks: "Hızlı Bağlantılar",
        contactInfo: "İletişim Bilgileri",
        address: "123 Hukuk Cad, Adalet Şehri, 10100",
        phone: "+1 (555) 123-4567",
        email: "info@lawfirm.com",
        copyright: "© 2025 Hukuk Büronuz. Tüm Hakları Saklıdır.",
        madeBy: "Softium Technologies tarafından yapılmıştır",
      },
    },
  },
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    lng: "tr",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    resources: fallbackResources,
  });

export default i18n;
