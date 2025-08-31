import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Home from "@/pages/Home";
import Metodo from "@/pages/Metodo";
import Tratamientos from "@/pages/Tratamientos";
import Nosotros from "@/pages/Nosotros";
import Ubicaciones from "@/pages/Ubicaciones";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contacto from "@/pages/Contacto";
import Carrito from "@/pages/Carrito";
import ClubMAC from "@/pages/ClubMAC";
import PoliticaPrivacidad from "@/pages/PoliticaPrivacidad";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/metodo" component={Metodo} />
          <Route path="/tratamientos" component={Tratamientos} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/ubicaciones" component={Ubicaciones} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/club" component={ClubMAC} />
          <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
