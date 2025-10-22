import { useEffect } from 'react';
import { Switch, Route } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import PracticeAreasPage from '@/pages/PracticeAreasPage';
import PracticeAreaDetailPage from '@/pages/PracticeAreaDetailPage';
import TeamPage from '@/pages/TeamPage';
import LawyerProfilePage from '@/pages/LawyerProfilePage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/practice-areas" component={PracticeAreasPage} />
      <Route path="/practice-areas/:slug" component={PracticeAreaDetailPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/team/:lawyerId" component={LawyerProfilePage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (i18n.language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', i18n.language);
    }
  }, [i18n.language]);

  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
