import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t("home.contactForm.required");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("home.contactForm.minLength", { min: 2 });
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("home.contactForm.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("home.contactForm.invalidEmail");
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim() && formData.phone.trim().length < 10) {
      newErrors.phone = t("home.contactForm.minLength", { min: 10 });
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = t("home.contactForm.required");
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = t("home.contactForm.minLength", { min: 3 });
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t("home.contactForm.required");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("home.contactForm.minLength", { min: 10 });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.3; // 70% success rate

      if (isSuccess) {
        setIsSuccess(true);
        toast({
          title: t("home.contactForm.success"),
          description: t("hero.subtitle"),
        });

        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error("Simulated error");
      }
    } catch (error) {
      toast({
        title: t("home.contactForm.error"),
        description: "Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full">
        <div className="text-center space-y-4 py-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-900">
              {t("home.contactForm.success")}
            </h3>
            <p className="text-green-700 mt-2">
              En kısa sürede size dönüş yapacağız.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t("home.contactForm.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("home.contactForm.subtitle")}
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                {t("home.contactForm.name")} *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
                placeholder={t("home.contactForm.placeholders.name")}
              />
              {errors.name && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                {t("home.contactForm.email")} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
                placeholder={t("home.contactForm.placeholders.email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                {t("home.contactForm.phone")}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
                placeholder={t("home.contactForm.placeholders.phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                {t("home.contactForm.subject")} *
              </Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={errors.subject ? "border-red-500" : ""}
                placeholder={t("home.contactForm.placeholders.subject")}
              />
              {errors.subject && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.subject}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t("home.contactForm.message")} *
            </Label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={errors.message ? "border-red-500" : ""}
              placeholder={t("home.contactForm.placeholders.message")}
            />
            {errors.message && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("home.contactForm.sending")}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t("home.contactForm.submit")}
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
