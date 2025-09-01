import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/UI/button";
import { Card, CardContent } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Separator } from "@/components/UI/separator";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, MapPin } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  category: string;
}

export default function Carrito() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Tratamiento Facial Completo",
      description: "Limpieza profunda, hidratación y rejuvenecimiento facial",
      price: 250,
      originalPrice: 300,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Medicina Estética Facial"
    },
    {
      id: "2",
      name: "Sesión de Biohacking",
      description: "Optimización celular y análisis completo de biomarkadores",
      price: 180,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Well Aging"
    },
    {
      id: "3",
      name: "Plan Nutricional Personalizado",
      description: "3 meses de seguimiento nutricional con especialista",
      price: 350,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Nutrición y Obesidad"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === "MAC20") {
      setAppliedPromo("MAC20");
      setPromoCode("");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo === "MAC20" ? subtotal * 0.2 : 0;
  const total = subtotal - discount;

  return (
    <div className="pt-16 font-body antialiased min-h-screen bg-gray-50">
      <Helmet>
        <title>Carrito | Mallorca Aesthetic Clinic</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Resumen de tus servicios y tratamientos seleccionados." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-12 bg-white" data-testid="carrito-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Carrito de Compras
              </div>
              <h1 className="text-4xl lg:text-6xl font-title gold-accent mb-6">
                Tu Transformación
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Revisa tus tratamientos seleccionados y completa tu reserva
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {cartItems.length === 0 ? (
        /* Empty Cart */
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-title text-foreground mb-4">
                Tu carrito está vacío
              </h2>
              <p className="text-muted-foreground mb-8">
                Explora nuestros tratamientos y comienza tu transformación
              </p>
              <Button 
                className="bg-turquoise text-white hover:bg-gold-light hover:text-gold-deep"
                data-testid="button-browse-treatments"
              >
                Ver Tratamientos
              </Button>
            </AnimatedSection>
          </div>
        </section>
      ) : (
        /* Cart Content */
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-title gold-accent mb-6">
                        Tratamientos Seleccionados ({cartItems.length})
                      </h2>
                      
                      <div className="space-y-6">
                        {cartItems.map((item, index) => (
                          <AnimatedSection key={item.id} delay={index * 0.1}>
                            <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                              <img 
                                src={item.image}
                                alt={item.name}
                                className="w-full sm:w-32 h-32 object-cover rounded-lg"
                              />
                              
                              <div className="flex-1 space-y-3">
                                <div>
                                  <div className="text-xs text-turquoise font-medium uppercase tracking-wider">
                                    {item.category}
                                  </div>
                                  <h3 className="text-lg font-title text-foreground">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="text-lg font-semibold text-foreground">
                                      €{item.price}
                                    </div>
                                    {item.originalPrice && (
                                      <div className="text-sm text-muted-foreground line-through">
                                        €{item.originalPrice}
                                      </div>
                                    )}
                                  </div>
                                  
                                  <div className="flex items-center space-x-3">
                                    <div className="flex items-center border border-border rounded-lg">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        data-testid={`button-decrease-${item.id}`}
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">
                                        {item.quantity}
                                      </span>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        data-testid={`button-increase-${item.id}`}
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                    </div>
                                    
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => removeItem(item.id)}
                                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                      data-testid={`button-remove-${item.id}`}
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </AnimatedSection>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <AnimatedSection delay={0.2}>
                  <Card className="sticky top-24">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-title gold-accent mb-6">
                        Resumen del Pedido
                      </h3>
                      
                      {/* Promo Code */}
                      <div className="mb-6">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Código promocional"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            data-testid="input-promo-code"
                          />
                          <Button
                            variant="outline"
                            onClick={applyPromoCode}
                            disabled={!promoCode}
                            data-testid="button-apply-promo"
                          >
                            Aplicar
                          </Button>
                        </div>
                        {appliedPromo && (
                          <div className="text-sm text-green-600 mt-2">
                            ✓ Código {appliedPromo} aplicado
                          </div>
                        )}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      {/* Price Breakdown */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Subtotal</span>
                          <span>€{subtotal.toFixed(2)}</span>
                        </div>
                        
                        {discount > 0 && (
                          <div className="flex justify-between text-sm text-green-600">
                            <span>Descuento (20%)</span>
                            <span>-€{discount.toFixed(2)}</span>
                          </div>
                        )}
                        
                        <Separator className="my-2" />
                        
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span className="text-turquoise">€{total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      {/* Checkout Button */}
                      <Button 
                        className="w-full bg-turquoise text-white hover:bg-gold-light hover:text-gold-deep transition-all duration-300 py-3 text-lg"
                        data-testid="button-checkout"
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Proceder al Pago
                      </Button>
                      
                      <div className="mt-4 text-center">
                        <Button 
                          variant="ghost"
                          className="text-sm text-muted-foreground hover:text-foreground"
                          data-testid="button-continue-shopping"
                        >
                          Continuar Comprando
                        </Button>
                      </div>
                      
                      {/* Trust Indicators */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="space-y-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-turquoise" />
                            <span>Tratamientos en Mallorca</span>
                          </div>
                          <div className="flex items-center">
                            <CreditCard className="w-4 h-4 mr-2 text-turquoise" />
                            <span>Pago seguro garantizado</span>
                          </div>
                          <div className="flex items-center">
                            <ShoppingBag className="w-4 h-4 mr-2 text-turquoise" />
                            <span>Satisfacción garantizada</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
