import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";

function Router() {
  return (
    <div className="min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/metodo" component={Home} />
        <Route path="/tratamientos" component={Home} />
        <Route path="/nosotros" component={Home} />
        <Route path="/ubicaciones" component={Home} />
        <Route path="/blog" component={Home} />
        <Route path="/contacto" component={Home} />
        <Route path="/club" component={Home} />
        <Route component={Home} />
      </Switch>
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
