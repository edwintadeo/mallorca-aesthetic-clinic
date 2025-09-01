import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/UI/card";
import { Badge } from "@/components/UI/badge";
import { Button } from "@/components/UI/button";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { OptimizedVideo } from "@/components/UI/OptimizedVideo";
import LazyImage from "@/components/UI/LazyImage";
import { Skeleton } from "@/components/UI/Skeleton";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { getVideoConfigComplete } from "@/config/videos";

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["/api/posts"],
  });

  const categories = ["Todos", "Well-Aging", "Tecnología", "Nutrición", "Cuidados", "Novedades"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = Array.isArray(posts) ? posts.filter((post: any) => 
    selectedCategory === "Todos" || post.category === selectedCategory
  ) : [];

  const featuredPost = Array.isArray(posts) && posts.length > 0 ? posts[0] : null;
  const regularPosts = Array.isArray(posts) && posts.length > 1 ? posts.slice(1) : [];

  // Fallback posts for demonstration when no data is available
  const fallbackPosts = [
    {
      id: "1",
      title: "Los 5 Pilares del Well-Aging Moderno",
      slug: "pilares-well-aging-moderno",
      excerpt: "Descubre los fundamentos científicos para un envejecimiento saludable y natural que va más allá de los tratamientos estéticos.",
      content: "Contenido completo del artículo...",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-01-15T00:00:00Z",
      category: "Well-Aging",
      readTime: "5 min"
    },
    {
      id: "2",
      title: "Innovaciones en Medicina Regenerativa",
      slug: "innovaciones-medicina-regenerativa",
      excerpt: "Las últimas tecnologías que están revolucionando los tratamientos de rejuvenecimiento facial y corporal.",
      content: "Contenido completo del artículo...",
      imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-01-12T00:00:00Z",
      category: "Tecnología",
      readTime: "7 min"
    },
    {
      id: "3",
      title: "Nutrición Anti-Inflamatoria: Tu Aliada de Belleza",
      slug: "nutricion-anti-inflamatoria",
      excerpt: "Cómo una alimentación consciente potencia los resultados de tus tratamientos estéticos desde el interior.",
      content: "Contenido completo del artículo...",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-01-08T00:00:00Z",
      category: "Nutrición", 
      readTime: "6 min"
    },
    {
      id: "4",
      title: "Cuidados Post-Tratamiento: Maximiza tus Resultados",
      slug: "cuidados-post-tratamiento",
      excerpt: "Guía completa para optimizar la recuperación y mantener los beneficios de tus tratamientos estéticos.",
      content: "Contenido completo del artículo...",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      publishedAt: "2024-01-05T00:00:00Z",
      category: "Cuidados",
      readTime: "4 min"
    }
  ];

  const displayPosts = posts || fallbackPosts;
  const displayFeatured = featuredPost || fallbackPosts[0];
  const displayRegular = regularPosts.length > 0 ? regularPosts : fallbackPosts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16 font-body antialiased">
      <Helmet>
        <title>Blog MAC | Medicina estética, bienestar y well-aging</title>
        <meta
          name="description"
          content="Artículos especializados sobre medicina estética, bienestar y well-aging escritos por nuestros expertos de MAC."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden gold-border-bottom" data-testid="blog-hero">
        {/* Video Background */}
        <OptimizedVideo
          src={getVideoConfigComplete('background', 'blog')?.primary || ''}
          fallbackSrc={getVideoConfigComplete('background', 'blog')?.fallback || ''}
          poster={getVideoConfigComplete('background', 'blog')?.poster || ''}
          className="absolute inset-0 w-full h-full opacity-20"
          priority={true}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Pearl Overlay for luxury contrast */}
        <div className="absolute inset-0 video-overlay-pearl"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Educación y Bienestar
            </div>
            <h1 className="text-5xl lg:text-7xl font-title gold-accent mb-6">
              Blog MAC
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Artículos especializados sobre medicina estética, bienestar y las últimas tendencias 
              en well-aging escritos por nuestros expertos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {displayFeatured && (
        <section className="py-20 section-warm-pearl gold-border-bottom" data-testid="featured-post">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-subtitle gold-accent-prominent mb-4">Artículo Destacado</h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid="featured-article">
                <div className="grid lg:grid-cols-2 gap-0">
                  <img 
                    src={displayFeatured.imageUrl}
                    alt={displayFeatured.title}
                    className="w-full h-full min-h-[400px] object-cover"
                  />
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-turquoise-light text-turquoise">Destacado</Badge>
                      {displayFeatured.category && (
                        <Badge variant="secondary">{displayFeatured.category}</Badge>
                      )}
                    </div>
                    <h3 className="text-3xl font-title font-semibold mb-4 leading-tight">
                      {displayFeatured.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {displayFeatured.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(displayFeatured.publishedAt)}
                      </div>
                      {displayFeatured.readTime && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {displayFeatured.readTime} lectura
                        </div>
                      )}
                    </div>
                    <Link href={`/blog/${displayFeatured.slug}`}>
                      <Button 
                        className="bg-turquoise-medium text-turquoise hover:bg-turquoise-light group"
                        data-testid="button-read-featured"
                      >
                        Leer artículo completo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 section-beige" data-testid="category-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-turquoise-medium text-turquoise hover:bg-turquoise-light" 
                    : "border-turquoise text-turquoise hover:bg-turquoise-light hover:text-turquoise"
                  }
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white gold-border-bottom" data-testid="blog-posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Error al cargar los artículos. Por favor, intenta de nuevo.</p>
            </div>
          ) : displayRegular.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayRegular.map((post: any, index: number) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1" data-testid={`blog-post-${index}`}>
                    <div className="relative overflow-hidden h-48">
                      <LazyImage 
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        {post.category && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-turquoise-light text-turquoise border-turquoise/20"
                          >
                            {post.category}
                          </Badge>
                        )}
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                        </div>
                      </div>
                      <h3 className="text-xl font-subtitle font-semibold mb-3 line-clamp-2 group-hover:text-turquoise transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        {post.readTime && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        )}
                        <Link href={`/blog/${post.slug}`}>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-turquoise hover:text-turquoise-dark hover:bg-turquoise-light p-0 h-auto font-semibold"
                            data-testid={`button-read-more-${index}`}
                          >
                            Leer más
                            <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-subtitle mb-4">No hay artículos disponibles</h3>
              <p className="text-muted-foreground">Pronto publicaremos nuevos contenidos.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 section-pearl" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-subtitle gold-accent-prominent mb-6">
              Mantente Informado
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Suscríbete a nuestro newsletter y recibe los últimos artículos sobre medicina estética y bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-turquoise focus:border-transparent"
                data-testid="input-newsletter-email"
              />
              <Button 
                className="bg-turquoise-medium text-turquoise hover:bg-turquoise-light"
                data-testid="button-newsletter-subscribe"
              >
                Suscribirse
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No compartimos tu información. Puedes darte de baja en cualquier momento.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
