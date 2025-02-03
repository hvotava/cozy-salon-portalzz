
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import MensHaircuts from "./pages/MensHaircuts";
import WomensHaircuts from "./pages/WomensHaircuts";
import HairColoring from "./pages/HairColoring";
import HairExtensions from "./pages/HairExtensions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/pansky-strih" element={<MensHaircuts />} />
          <Route path="/damsky-strih" element={<WomensHaircuts />} />
          <Route path="/barveni" element={<HairColoring />} />
          <Route path="/prodluzovani" element={<HairExtensions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
