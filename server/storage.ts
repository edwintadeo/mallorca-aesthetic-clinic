import { 
  type User, 
  type InsertUser, 
  type ContactRequest, 
  type InsertContactRequest,
  type Post,
  type InsertPost,
  type Testimonial,
  type InsertTestimonial,
  type Treatment,
  type InsertTreatment,
  type Location,
  type InsertLocation
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact Requests
  createContactRequest(contactRequest: InsertContactRequest): Promise<ContactRequest>;
  getAllContactRequests(): Promise<ContactRequest[]>;
  getContactRequestById(id: string): Promise<ContactRequest | undefined>;
  
  // Posts
  createPost(post: InsertPost): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
  getPostById(id: string): Promise<Post | undefined>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  
  // Testimonials
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonialById(id: string): Promise<Testimonial | undefined>;
  
  // Treatments
  createTreatment(treatment: InsertTreatment): Promise<Treatment>;
  getAllTreatments(): Promise<Treatment[]>;
  getTreatmentById(id: string): Promise<Treatment | undefined>;
  
  // Locations
  createLocation(location: InsertLocation): Promise<Location>;
  getAllLocations(): Promise<Location[]>;
  getLocationById(id: string): Promise<Location | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private posts: Map<string, Post>;
  private testimonials: Map<string, Testimonial>;
  private treatments: Map<string, Treatment>;
  private locations: Map<string, Location>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.posts = new Map();
    this.testimonials = new Map();
    this.treatments = new Map();
    this.locations = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample blog posts
    const samplePosts: Post[] = [
      {
        id: randomUUID(),
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
          
          <h2>Conclusión</h2>
          <p>El well-aging moderno no es una moda, es una filosofía de vida que nos permite envejecer con gracia, salud y vitalidad.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-01-15"),
        createdAt: new Date("2024-01-15")
      },
      {
        id: randomUUID(),
        title: "Innovaciones en Medicina Regenerativa",
        slug: "innovaciones-medicina-regenerativa",
        excerpt: "Las últimas tecnologías que están revolucionando los tratamientos de rejuvenecimiento facial y corporal.",
        content: `
          <h2>La Era de la Medicina Regenerativa</h2>
          <p>Estamos viviendo una revolución en medicina estética gracias a los avances en medicina regenerativa. Estos tratamientos no solo mejoran la apariencia, sino que estimulan los propios mecanismos de reparación del cuerpo.</p>
          
          <h2>Tecnologías Revolucionarias</h2>
          
          <h3>Terapia con Células Madre</h3>
          <p>Las células madre tienen la capacidad única de diferenciarse en diferentes tipos de células, lo que las convierte en una herramienta poderosa para la regeneración de tejidos.</p>
          
          <h3>Plasma Rico en Plaquetas (PRP)</h3>
          <p>El PRP utiliza los factores de crecimiento presentes en nuestra propia sangre para estimular la producción de colágeno y elastina, mejorando la textura y firmeza de la piel.</p>
          
          <h3>Exosomas y Factores de Crecimiento</h3>
          <p>Estas pequeñas vesículas celulares contienen información regenerativa que puede acelerar significativamente los procesos de curación y rejuvenecimiento.</p>
          
          <h2>Aplicaciones Clínicas</h2>
          <p>En MAC, utilizamos estas tecnologías de forma integrada en nuestro Método MAC, personalizando cada tratamiento según las necesidades específicas de cada paciente.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-01-12"),
        createdAt: new Date("2024-01-12")
      }
    ];

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: randomUUID(),
        name: "María S.",
        treatment: "Tratamiento facial integral",
        rating: 5,
        comment: "Los resultados superaron mis expectativas. No solo me veo mejor, sino que me siento más segura. El seguimiento personalizado marca la diferencia.",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Carmen R.",
        treatment: "Programa well-aging",
        rating: 5,
        comment: "El enfoque integral del Método MAC es único. No solo cuidan tu imagen, sino tu bienestar completo. Es una inversión en ti misma.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Elena T.",
        treatment: "Rejuvenecimiento facial",
        rating: 5,
        comment: "Después de años buscando resultados naturales, finalmente los encontré en MAC. La profesionalidad y calidez humana son excepcionales.",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        createdAt: new Date()
      }
    ];

    // Sample treatments
    const sampleTreatments: Treatment[] = [
      {
        id: randomUUID(),
        name: "Rejuvenecimiento Facial Integral",
        category: "facial",
        description: "Tratamiento completo que combina múltiples técnicas para revertir los signos del envejecimiento facial.",
        benefits: ["Reducción de arrugas", "Mejora de textura", "Hidratación profunda", "Estimulación de colágeno"],
        technology: "Radiofrecuencia + Ultrasonido microfocalizado + LED",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true
      },
      {
        id: randomUUID(),
        name: "Remodelación Corporal CoolSculpting",
        category: "corporal",
        description: "Eliminación no invasiva de grasa localizada mediante criolipólisis avanzada.",
        benefits: ["Reducción de grasa", "Sin cirugía", "Sin tiempo de recuperación", "Resultados permanentes"],
        technology: "CoolSculpting Elite + CoolTone",
        imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true
      },
      {
        id: randomUUID(),
        name: "Terapia Regenerativa PRP",
        category: "wellaging",
        description: "Medicina regenerativa con plasma rico en plaquetas para rejuvenecimiento natural.",
        benefits: ["Regeneración celular", "Bioestimulación natural", "Sin efectos secundarios", "Resultados progresivos"],
        technology: "PRP Autólogo + Microagujas + LED terapéutico",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true
      }
    ];

    // Sample locations
    const sampleLocations: Location[] = [
      {
        id: randomUUID(),
        name: "MAC Palma Centro",
        address: "Passeig del Born, 15, 07012 Palma",
        phone: "+34 971 123 456",
        hours: "Lun-Vie: 9:00-19:00 | Sáb: 9:00-14:00",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
      },
      {
        id: randomUUID(),
        name: "MAC Puerto Portals",
        address: "Local 45, Puerto Portals, 07181 Calvià",
        phone: "+34 971 654 321", 
        hours: "Lun-Vie: 10:00-20:00 | Sáb: 10:00-15:00",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
      }
    ];

    // Initialize maps with sample data
    samplePosts.forEach(post => this.posts.set(post.id, post));
    sampleTestimonials.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
    sampleTreatments.forEach(treatment => this.treatments.set(treatment.id, treatment));
    sampleLocations.forEach(location => this.locations.set(location.id, location));
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact Request methods
  async createContactRequest(insertContactRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const contactRequest: ContactRequest = {
      ...insertContactRequest,
      id,
      message: insertContactRequest.message || null,
      age: insertContactRequest.age || null,
      treatment: insertContactRequest.treatment || null,
      preferredDate: insertContactRequest.preferredDate || null,
      preferredTime: insertContactRequest.preferredTime || null,
      createdAt: new Date()
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getContactRequestById(id: string): Promise<ContactRequest | undefined> {
    return this.contactRequests.get(id);
  }

  // Post methods
  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = randomUUID();
    const post: Post = {
      ...insertPost,
      id,
      imageUrl: insertPost.imageUrl || null,
      publishedAt: insertPost.publishedAt || new Date(),
      createdAt: new Date()
    };
    this.posts.set(id, post);
    return post;
  }

  async getAllPosts(): Promise<Post[]> {
    return Array.from(this.posts.values()).sort(
      (a, b) => (b.publishedAt?.getTime() || 0) - (a.publishedAt?.getTime() || 0)
    );
  }

  async getPostById(id: string): Promise<Post | undefined> {
    return this.posts.get(id);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(post => post.slug === slug);
  }

  // Testimonial methods
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      imageUrl: insertTestimonial.imageUrl || null,
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getTestimonialById(id: string): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  // Treatment methods
  async createTreatment(insertTreatment: InsertTreatment): Promise<Treatment> {
    const id = randomUUID();
    const treatment: Treatment = {
      ...insertTreatment,
      id,
      imageUrl: insertTreatment.imageUrl || null,
      benefits: insertTreatment.benefits || null,
      technology: insertTreatment.technology || null,
      featured: insertTreatment.featured || null
    };
    this.treatments.set(id, treatment);
    return treatment;
  }

  async getAllTreatments(): Promise<Treatment[]> {
    return Array.from(this.treatments.values());
  }

  async getTreatmentById(id: string): Promise<Treatment | undefined> {
    return this.treatments.get(id);
  }

  // Location methods
  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const id = randomUUID();
    const location: Location = {
      ...insertLocation,
      id,
      imageUrl: insertLocation.imageUrl || null
    };
    this.locations.set(id, location);
    return location;
  }

  async getAllLocations(): Promise<Location[]> {
    return Array.from(this.locations.values());
  }

  async getLocationById(id: string): Promise<Location | undefined> {
    return this.locations.get(id);
  }
}

export const storage = new MemStorage();
