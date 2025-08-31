import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, X, ArrowRight, Sparkles, TrendingUp, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "treatment" | "blog" | "location" | "service";
  url: string;
  category?: string;
  highlight?: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches] = useState([
    "Botox", "Lifting facial", "Método MAC", "Nutrición", "Coolsculpting"
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch data for search
  const { data: treatments } = useQuery({
    queryKey: ["/api/treatments"],
    enabled: isOpen,
  });

  const { data: posts } = useQuery({
    queryKey: ["/api/posts"],
    enabled: isOpen,
  });

  const { data: locations } = useQuery({
    queryKey: ["/api/locations"],
    enabled: isOpen,
  });

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved).slice(0, 5));
    }
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Perform search
  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const allResults: SearchResult[] = [];

    // Search treatments
    if (Array.isArray(treatments)) {
      treatments.forEach((treatment: any) => {
        if (
          treatment.name?.toLowerCase().includes(searchLower) ||
          treatment.description?.toLowerCase().includes(searchLower) ||
          treatment.category?.toLowerCase().includes(searchLower)
        ) {
          allResults.push({
            id: treatment.id,
            title: treatment.name,
            description: treatment.description,
            type: "treatment",
            url: "/tratamientos",
            category: treatment.category,
            highlight: treatment.benefits?.[0],
          });
        }
      });
    }

    // Search blog posts
    if (Array.isArray(posts)) {
      posts.forEach((post: any) => {
        if (
          post.title?.toLowerCase().includes(searchLower) ||
          post.excerpt?.toLowerCase().includes(searchLower) ||
          post.category?.toLowerCase().includes(searchLower)
        ) {
          allResults.push({
            id: post.id,
            title: post.title,
            description: post.excerpt,
            type: "blog",
            url: `/blog/${post.slug}`,
            category: post.category,
          });
        }
      });
    }

    // Search locations
    if (Array.isArray(locations)) {
      locations.forEach((location: any) => {
        if (
          location.name?.toLowerCase().includes(searchLower) ||
          location.address?.toLowerCase().includes(searchLower)
        ) {
          allResults.push({
            id: location.id,
            title: location.name,
            description: location.address,
            type: "location",
            url: "/ubicaciones",
            highlight: location.phone,
          });
        }
      });
    }

    // Add quick links
    if ("contacto".includes(searchLower) || "cita".includes(searchLower)) {
      allResults.push({
        id: "contact",
        title: "Reservar Cita",
        description: "Solicita tu consulta gratuita",
        type: "service",
        url: "/contacto",
      });
    }

    if ("método mac".includes(searchLower) || "metodo".includes(searchLower)) {
      allResults.push({
        id: "method",
        title: "Método MAC",
        description: "Conoce nuestro protocolo exclusivo de 4 fases",
        type: "service",
        url: "/metodo",
      });
    }

    setResults(allResults.slice(0, 8));
  }, [searchTerm, treatments, posts, locations]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    // Save to recent searches
    const recent = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(recent);
    localStorage.setItem("recentSearches", JSON.stringify(recent));
  };

  const handleResultClick = () => {
    setSearchTerm("");
    onClose();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "treatment": return "💉";
      case "blog": return "📝";
      case "location": return "📍";
      case "service": return "⭐";
      default: return "🔍";
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "treatment": return "bg-turquoise-light text-turquoise";
      case "blog": return "bg-gold-light/20 text-gold-deep";
      case "location": return "bg-pearl text-foreground";
      case "service": return "bg-gradient-to-r from-gold-light to-gold-deep text-white";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden" data-testid="search-modal">
        {/* Search Header */}
        <div className="p-6 pb-4 bg-gradient-to-r from-pearl to-beige">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-title gold-accent">
              ¿Qué estás buscando?
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Buscar tratamientos, artículos, ubicaciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg bg-white border-gold-light/30 focus:border-turquoise"
              data-testid="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                data-testid="clear-search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Content */}
        <div className="p-6 pt-2 max-h-[60vh] overflow-y-auto">
          {/* Search Results */}
          {results.length > 0 ? (
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                Resultados ({results.length})
              </h3>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={handleResultClick}
                >
                  <div className="group p-4 rounded-lg hover:bg-pearl transition-colors cursor-pointer" data-testid={`search-result-${result.id}`}>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-1">{getTypeIcon(result.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-subtitle font-semibold group-hover:text-turquoise transition-colors">
                            {result.title}
                          </h4>
                          <Badge className={`text-xs ${getTypeBadgeColor(result.type)}`}>
                            {result.type === "treatment" ? "Tratamiento" :
                             result.type === "blog" ? "Artículo" :
                             result.type === "location" ? "Ubicación" : "Servicio"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {result.description}
                        </p>
                        {result.highlight && (
                          <p className="text-xs text-turquoise mt-1">
                            ✨ {result.highlight}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-turquoise opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : searchTerm.length >= 2 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No se encontraron resultados para "{searchTerm}"</p>
              <p className="text-sm mt-2">Intenta con otros términos</p>
            </div>
          ) : (
            <>
              {/* Popular Searches */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-turquoise" />
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                    Búsquedas Populares
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(term)}
                      className="border-gold-light/30 hover:bg-turquoise-light hover:text-turquoise hover:border-turquoise"
                      data-testid={`popular-search-${term}`}
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      {term}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                        Búsquedas Recientes
                      </h3>
                    </div>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-muted-foreground hover:text-foreground"
                      data-testid="clear-recent"
                    >
                      Limpiar
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <Button
                        key={term}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSearch(term)}
                        className="text-muted-foreground hover:text-turquoise hover:bg-turquoise-light"
                        data-testid={`recent-search-${term}`}
                      >
                        {term}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="p-4 bg-pearl border-t border-gold-light/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Presiona <kbd className="px-2 py-1 bg-white rounded text-xs">ESC</kbd> para cerrar
            </p>
            <Link href="/contacto" onClick={handleResultClick}>
              <Button size="sm" className="bg-turquoise text-white hover:bg-turquoise-dark">
                Reservar Cita Ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}