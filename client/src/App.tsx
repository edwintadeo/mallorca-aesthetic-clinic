import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/UI/toaster";
import { TooltipProvider } from "@/components/UI/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
const Home = lazy(() => import("@/pages/Home"));
const Metodo = lazy(() => import("@/pages/Metodo"));
const Tratamientos = lazy(() => import("@/pages/Tratamientos"));
const Nosotros = lazy(() => import("@/pages/Nosotros"));
const Ubicaciones = lazy(() => import("@/pages/Ubicaciones"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const Carrito = lazy(() => import("@/pages/Carrito"));
const ClubMAC = lazy(() => import("@/pages/ClubMAC"));
const PoliticaPrivacidad = lazy(() => import("@/pages/PoliticaPrivacidad"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Cargando…</div>}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
