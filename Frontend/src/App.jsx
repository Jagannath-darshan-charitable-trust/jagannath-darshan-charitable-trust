import { Toaster, Sonner } from "@/components/ui/feedback";
import { TooltipProvider } from "@/components/ui/primitives";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Index from "./pages/Index";
import OurSeva from "./pages/OurSeva";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gosala from "./pages/Gosala";
import Annabhandar from "./pages/Annabhandar";
import MandirNirman from "./pages/MandirNirman";
import WhoWeAre from "./pages/WhoWeAre";
import OurMissionVision from "./pages/OurMissionVision";
import JagannathLegacy from "./pages/JagannathLegacy";
import OurFounder from "./pages/OurFounder";
import OurFounder from "./pages/OurFounder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Activate ScrollToTop */}
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-seva" element={<OurSeva />} />
            <Route path="/our-seva/gosala" element={<Gosala />} />
            <Route path="/our-seva/annabhandar" element={<Annabhandar />} />
            <Route path="/our-seva/mandir-nirman" element={<MandirNirman />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/mission-vision" element={<OurMissionVision />} />
            <Route path="/about/jagannath-legacy" element={<JagannathLegacy />} />
            <Route path="/about/our-founder" element={<OurFounder />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
