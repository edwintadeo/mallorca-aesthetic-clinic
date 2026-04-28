import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";

const Metodo = lazy(() => import("./pages/Metodo"));
const Tratamientos = lazy(() => import("./pages/Tratamientos"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Ubicaciones = lazy(() => import("./pages/Ubicaciones"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contacto = lazy(() => import("./pages/Contacto"));
const ClubMAC = lazy(() => import("./pages/ClubMAC"));
const Carrito = lazy(() => import("./pages/Carrito"));
const Results = lazy(() => import("./pages/Results"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad"));
const NotFound = lazy(() => import("./pages/not-found"));

function Router() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-turquoise"></div></div>}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/metodo" component={Metodo} />
          <Route path="/tratamientos" component={Tratamientos} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/ubicaciones" component={Ubicaciones} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/club" component={ClubMAC} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/resultados" component={Results} />
          <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
