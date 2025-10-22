import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/flags/Flag_of_the_United_Kingdom_(3-5).svg",
    alt: "UK Flag",
  },
  {
    code: "tr",
    name: "Türkçe",
    flag: "/flags/Flag_of_Turkey.svg",
    alt: "Turkey Flag",
  },
  {
    code: "ar",
    name: "العربية",
    flag: "/flags/Flag_of_Saudi_Arabia.svg",
    alt: "Saudi Arabia Flag",
  },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          data-testid="button-language-switcher"
          className="gap-2"
        >
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.alt}
            className="h-4 w-6 object-cover rounded-sm"
          />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-testid="dropdown-language-menu">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              i18n.changeLanguage(language.code);
              console.log(`Language changed to ${language.name}`);
            }}
            data-testid={`menu-item-language-${language.code}`}
            className="gap-2"
          >
            <img
              src={language.flag}
              alt={language.alt}
              className="h-4 w-6 object-cover rounded-sm"
            />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
