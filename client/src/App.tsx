import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import PracticeAreasPage from "@/pages/PracticeAreasPage";
import PracticeAreaDetailPage from "@/pages/PracticeAreaDetailPage";
import TeamPage from "@/pages/TeamPage";
import LawyerProfilePage from "@/pages/LawyerProfilePage";
import BlogPage from "@/pages/BlogPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/practice-areas" component={PracticeAreasPage} />
      <Route path="/practice-areas/:slug" component={PracticeAreaDetailPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/team/:lawyerId" component={LawyerProfilePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogDetailPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { i18n, ready } = useTranslation();
  const [showDemoModal, setShowDemoModal] = useState(false);

  // HTML element attributes are now handled in i18n.js

  useEffect(() => {
    // Check if user has seen the demo modal before
    const hasSeenDemoModal = sessionStorage.getItem("hasSeenDemoModal");
    if (!hasSeenDemoModal) {
      setShowDemoModal(true);
    }
  }, []);

  // Show loading while i18n is initializing
  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const handleCloseDemoModal = () => {
    setShowDemoModal(false);
    sessionStorage.setItem("hasSeenDemoModal", "true");
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
      <DemoModal isOpen={showDemoModal} onClose={handleCloseDemoModal} />
    </TooltipProvider>
  );
}

export default App;
