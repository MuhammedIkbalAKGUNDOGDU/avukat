import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Meta } from "@/components/Meta";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: t("contactForm.success"),
      description: t("hero.subtitle"),
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Meta
        title={t("pageTitle.contact")}
        description={t("contactForm.subtitle")}
        keywords="iletişim, hukuki danışmanlık, avukat randevusu, hukuk bürosu iletişim"
      />
      <div className="flex flex-col">
        <section
          className="bg-primary py-20 text-primary-foreground md:py-24"
          data-testid="section-contact-hero"
        >
          <div className="mx-auto max-w-4xl px-6 text-center md:px-8 lg:px-12">
            <h1
              className="font-serif text-5xl font-bold md:text-6xl"
              data-testid="text-contact-title"
            >
              {t("contactForm.title")}
            </h1>
            <p
              className="mt-6 text-xl text-primary-foreground/90"
              data-testid="text-contact-subtitle"
            >
              {t("contactForm.subtitle")}
            </p>
          </div>
        </section>

        <section
          className="bg-background py-20 md:py-24"
          data-testid="section-contact-form"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card data-testid="card-contact-form">
                  <CardHeader>
                    <CardTitle className="font-serif text-3xl">
                      {t("contactForm.title")}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t("contactForm.subtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contactForm.name")}</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contactForm.email")}</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          data-testid="input-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contactForm.phone")}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          data-testid="input-phone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {t("contactForm.message")}
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          data-testid="input-message"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        data-testid="button-submit"
                      >
                        {t("contactForm.submit")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card data-testid="card-contact-info">
                  <CardHeader>
                    <CardTitle>{t("contactForm.contactInfo")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        {t("footer.address")}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        {t("footer.phone")}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        {t("footer.email")}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card data-testid="card-office-hours">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      {t("contactForm.officeHours")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("contactForm.hoursText")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
