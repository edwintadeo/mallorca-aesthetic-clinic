import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Calendar, Clock, ArrowLeft, Share2, User, ArrowRight } from "lucide-react";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["/api/posts", slug],
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["/api/posts"],
  });

  // Fallback post data for demonstration
  const fallbackPost = {
    id: "1",
    title: "Los 5 Pilares del Well-Aging Moderno",
    slug: "pilares-well-aging-moderno",
    excerpt: "Descubre los fundamentos científicos para un envejecimiento saludable y natural que va más allá de los tratamientos estéticos.",
    content: `
      <h2>Introducción al Well-Aging</h2>
      <p>El concepto de well-aging ha revolucionado la manera en que entendemos el envejecimiento. Ya no se trata solo de verse más joven, sino de envejecer de manera saludable, vibrante y auténtica.</p>
      
      <h2>Los 5 Pilares Fundamentales</h2>
      
      <h3>1. Optimización Hormonal</h3>
      <p>Las hormonas juegan un papel crucial en cómo envejecemos. Mantener niveles óptimos de hormonas como el estrógeno, testosterona, hormona del crecimiento y cortisol es fundamental para un envejecimiento saludable.</p>
      
      <h3>2. Nutrición Anti-Inflamatoria</h3>
      <p>La inflamación crónica es uno de los principales enemigos del envejecimiento saludable. Una dieta rica en antioxidantes, omega-3 y alimentos integrales puede reducir significativamente los marcadores inflamatorios.</p>
      
      <h3>3. Medicina Regenerativa</h3>
      <p>Tratamientos como el PRP (plasma rico en plaquetas), células madre y factores de crecimiento estimulan la regeneración natural del cuerpo, mejorando la calidad de la piel y los tejidos.</p>
      
      <h3>4. Ejercicio Funcional</h3>
      <p>No todos los ejercicios son iguales. El entrenamiento funcional que incluye fuerza, flexibilidad, equilibrio y resistencia cardiovascular es esencial para mantener la vitalidad.</p>
      
      <h3>5. Bienestar Mental y Emocional</h3>
      <p>El estrés crónico acelera el envejecimiento. Técnicas de mindfulness, meditación y manejo del estrés son tan importantes como cualquier tratamiento físico.</p>
      
      <h2>Integración en el Método MAC</h2>
      <p>En Mallorca Aesthetic Clinic, integramos estos cinco pilares en nuestro Método MAC, creando planes personalizados que abordan cada aspecto del well-aging de manera holística.</p>
      
      <h2>Conclusión</h2>
      <p>El well-aging moderno no es una moda, es una filosofía de vida que nos permite envejecer con gracia, salud y vitalidad. Cada uno de estos pilares trabaja en sinergia para crear una transformación integral que va mucho más allá de la apariencia externa.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    publishedAt: "2024-01-15T00:00:00Z",
    category: "Well-Aging",
    readTime: "5 min",
    author: "Dra. Liliana Ocampo"
  };

  const displayPost = post || fallbackPost;
  const relatedPostsFiltered = relatedPosts?.filter((p: any) => p.slug !== slug)?.slice(0, 3) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: displayPost.title,
        text: displayPost.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copy URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-turquoise mb-4"></div>
          <p className="text-muted-foreground">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-title mb-4">Error al cargar el artículo</h1>
          <p className="text-muted-foreground mb-6">No pudimos encontrar el artículo solicitado.</p>
          <Link href="/blog">
            <Button className="bg-turquoise text-white hover:bg-turquoise/90">
              Volver al blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 font-body antialiased">
      {/* Back Navigation */}
      <section className="py-8 bg-pearl" data-testid="back-navigation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button 
              variant="ghost" 
              className="text-turquoise hover:text-turquoise hover:bg-turquoise/10 group"
              data-testid="button-back-to-blog"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white" data-testid="article-header">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              {displayPost.category && (
                <Badge className="bg-turquoise text-white">{displayPost.category}</Badge>
              )}
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(displayPost.publishedAt)}
              </div>
              {displayPost.readTime && (
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {displayPost.readTime} lectura
                </div>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-title font-semibold mb-6 leading-tight">
              {displayPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {displayPost.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              {displayPost.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{displayPost.author}</div>
                    <div className="text-sm text-muted-foreground">Especialista MAC</div>
                  </div>
                </div>
              )}
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleShare}
                className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                data-testid="button-share-article"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white" data-testid="featured-image">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <img 
              src={displayPost.imageUrl}
              alt={displayPost.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              data-testid="img-article-featured"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white" data-testid="article-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.3}>
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-title prose-headings:gold-accent
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:my-6 prose-li:text-foreground/80
                prose-blockquote:border-l-4 prose-blockquote:border-turquoise 
                prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: displayPost.content }}
              data-testid="article-body"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Article Footer / CTA */}
      <section className="py-16 bg-pearl" data-testid="article-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="bg-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-title gold-accent mb-4">
                  ¿Te interesa este tema?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Agenda una consulta personalizada con nuestros especialistas para conocer más 
                  sobre cómo aplicar estos conceptos a tu caso específico.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contacto">
                    <Button 
                      className="bg-turquoise text-white hover:bg-turquoise/90"
                      data-testid="button-article-cta-contact"
                    >
                      Agenda tu consulta
                    </Button>
                  </Link>
                  <Button 
                    variant="outline"
                    className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                    data-testid="button-article-cta-whatsapp"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Consulta por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPostsFiltered.length > 0 && (
        <section className="py-20 bg-white" data-testid="related-posts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-title gold-accent mb-4">Artículos Relacionados</h2>
                <p className="text-muted-foreground">Continúa explorando nuestros contenidos</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPostsFiltered.map((relatedPost: any, index: number) => (
                <AnimatedSection key={relatedPost.id} delay={index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full" data-testid={`related-post-${index}`}>
                    <img 
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        {relatedPost.category && (
                          <Badge variant="secondary" className="text-xs">
                            {relatedPost.category}
                          </Badge>
                        )}
                        <div className="text-xs text-muted-foreground">
                          {formatDate(relatedPost.publishedAt)}
                        </div>
                      </div>
                      <h3 className="text-lg font-subtitle font-semibold mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-turquoise hover:text-turquoise hover:bg-turquoise/10 p-0 h-auto group w-full justify-start"
                          data-testid={`button-related-${index}`}
                        >
                          Leer más
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
