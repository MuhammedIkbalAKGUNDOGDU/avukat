import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ExternalLink, Clock } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t } = useTranslation();
  const [stage, setStage] = useState(1);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (stage === 2 && isOpen) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            onClose();
            return 15;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [stage, isOpen, onClose]);

  const handleStage1Complete = () => {
    setStage(2);
  };

  const handleStage2Complete = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <Card className="mx-4 w-full max-w-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {stage === 1 ? (
          <>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-900">
                {t("demoModal.stage1.title")}
              </CardTitle>
              <p className="text-lg text-blue-700">
                {t("demoModal.stage1.subtitle")}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 text-gray-700">
                <p className="text-base leading-relaxed">
                  {t("demoModal.stage1.description")}
                </p>
                <p className="text-base leading-relaxed">
                  {t("demoModal.stage1.details")}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleStage1Complete}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  {t("demoModal.stage1.button")}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                  size="lg"
                  onClick={() =>
                    window.open("https://softiumtechnologies.com", "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("demoModal.stage1.linkText")}
                </Button>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-red-900">
                {t("demoModal.stage2.title")}
              </CardTitle>
              <p className="text-lg text-red-700">
                {t("demoModal.stage2.subtitle")}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-base text-gray-700">
                  {t("demoModal.stage2.description")}
                </p>
                <ul className="space-y-2">
                  {t("demoModal.stage2.limitations", {
                    returnObjects: true,
                  }).map((limitation: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-red-50 p-4 text-center">
                <p className="text-sm text-red-700">
                  {t("demoModal.stage2.countdown", { seconds: countdown })}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleStage2Complete}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  size="lg"
                >
                  {t("demoModal.stage2.button")}
                </Button>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
