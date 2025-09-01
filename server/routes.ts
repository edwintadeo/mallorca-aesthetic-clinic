import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactRequestSchema, insertPostSchema, insertTestimonialSchema, insertTreatmentSchema, insertLocationSchema } from "@shared/schema";
import { ObjectStorageService } from "./objectStorage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Public Objects Endpoint
  app.get("/public-objects/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    console.log(`[Object Storage] Requesting file: ${filePath}`);
    
    const objectStorageService = new ObjectStorageService();
    try {
      console.log(`[Object Storage] Search paths: ${JSON.stringify(objectStorageService.getPublicObjectSearchPaths())}`);
      
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        console.log(`[Object Storage] File not found: ${filePath}`);
        return res.status(404).json({ error: "File not found" });
      }
      
      console.log(`[Object Storage] File found, downloading: ${filePath}`);
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error(`[Object Storage] Error for file ${filePath}:`, error);
      console.error(`[Object Storage] Error stack:`, (error as Error).stack);
      return res.status(500).json({ 
        error: "Internal server error", 
        message: (error as Error).message,
        filePath: filePath 
      });
    }
  });

  // Contact Requests
  app.post("/api/contact-requests", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.status(201).json(contactRequest);
    } catch (error) {
      console.error("Error creating contact request:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/contact-requests", async (req, res) => {
    try {
      const contactRequests = await storage.getAllContactRequests();
      res.json(contactRequests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Posts
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.getAllPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getPostBySlug(slug);
      if (!post) {
        res.status(404).json({ message: "Post not found" });
        return;
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const validatedData = insertPostSchema.parse(req.body);
      const post = await storage.createPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      console.error("Error creating testimonial:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Treatments
  app.get("/api/treatments", async (req, res) => {
    try {
      const treatments = await storage.getAllTreatments();
      res.json(treatments);
    } catch (error) {
      console.error("Error fetching treatments:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/treatments/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const treatment = await storage.getTreatmentById(id);
      if (!treatment) {
        res.status(404).json({ message: "Treatment not found" });
        return;
      }
      res.json(treatment);
    } catch (error) {
      console.error("Error fetching treatment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/treatments", async (req, res) => {
    try {
      const validatedData = insertTreatmentSchema.parse(req.body);
      const treatment = await storage.createTreatment(validatedData);
      res.status(201).json(treatment);
    } catch (error) {
      console.error("Error creating treatment:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Location Images
  app.get("/api/location-image/:id", async (req, res) => {
    const { id } = req.params;
    // Map location IDs to actual image paths
    const locationImages: Record<string, string> = {
      "1": "/vecteezy_beautiful-girl-in-spa-salon_27003157_1756656467761.jpg",
      "2": "/vecteezy_woman-receiving-a-spa-treatment_2023009_1756656592945.jpg"
    };
    
    const imagePath = locationImages[id];
    if (imagePath) {
      res.redirect(`/public-objects${imagePath}`);
    } else {
      res.status(404).json({ message: "Image not found" });
    }
  });

  // Locations
  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await storage.getAllLocations();
      res.json(locations);
    } catch (error) {
      console.error("Error fetching locations:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/locations", async (req, res) => {
    try {
      const validatedData = insertLocationSchema.parse(req.body);
      const location = await storage.createLocation(validatedData);
      res.status(201).json(location);
    } catch (error) {
      console.error("Error creating location:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
