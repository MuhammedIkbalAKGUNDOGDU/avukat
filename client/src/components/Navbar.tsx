import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/practice-areas", label: t("nav.practiceAreas") },
    { path: "/team", label: t("nav.team") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover-elevate rounded-md px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105"
            data-testid="link-home-logo"
          >
            <Scale className="h-8 w-8 text-primary transition-all duration-300 ease-in-out" />
            <span className="font-serif text-2xl font-bold text-primary transition-all duration-300 ease-in-out">
              LawFirm
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  data-testid={`button-nav-${link.path.slice(1) || "home"}`}
                  className="text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              <div className="transition-all duration-300 ease-in-out">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </div>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out md:hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
          data-testid="mobile-menu"
        >
          <div className="border-t py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link key={link.path} href={link.path}>
                  <Button
                    variant={location === link.path ? "secondary" : "ghost"}
                    className="w-full justify-start text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`button-mobile-nav-${
                      link.path.slice(1) || "home"
                    }`}
                    style={{
                      animationDelay: isMobileMenuOpen
                        ? `${index * 100}ms`
                        : "0ms",
                      animation: isMobileMenuOpen
                        ? "slideInFromTop 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
