import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyPetra from "./pages/WhyPetra";
import Governance from "./pages/Governance";
import Sustainability from "./pages/Sustainability";
import EthicsGovernance from "./pages/EthicsGovernance";
import OurValues from "./pages/OurValues";
import Activities from "./pages/Activities";
import Services from "./pages/Services";
import Safety from "./pages/Safety";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-petra" element={<WhyPetra />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/ethics-governance" element={<EthicsGovernance />} />
            <Route path="/our-values" element={<OurValues />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/services" element={<Services />} />
            <Route path="/safety" element={<Safety />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
