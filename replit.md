# Mallorca Aesthetic Clinic Website

## Overview

This is a modern, premium website for Mallorca Aesthetic Clinic (MAC) built with React and Express. The site embodies the concept "El Arte de Ganar Tiempo" (The Art of Gaining Time) and focuses on integral well-aging through aesthetic medicine. The application features a sophisticated design with a warm, editorial aesthetic using a pearl, beige, and turquoise color palette with gold accents, creating a "quiet luxury" feel appropriate for a high-end medical aesthetic clinic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js for the API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful endpoints for contact requests, blog posts, testimonials, treatments, and locations
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Express sessions with PostgreSQL store for user authentication

### Design System
- **Typography**: Custom font stack with Cormorant Garamond for titles, Inter for body text
- **Color Palette**: 
  - Base colors: Pearl (#EAE7DC), Beige (#EDE4D7), White
  - Accent: Turquoise (#008578) for CTAs and interactive elements
  - Gold tones: Deep (#A57D24), Light (#CBA64C), Champagne (#E5C77F) for luxury touches
- **Components**: Comprehensive UI component library built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with 12-column grid system

### Content Management
- **Blog System**: Dynamic blog with slug-based routing and rich content support
- **Testimonials**: Patient testimonial management with ratings and images
- **Treatments**: Categorized treatment catalog with detailed descriptions
- **Contact Forms**: Multi-step contact form with appointment booking functionality

### Performance Optimizations
- **Code Splitting**: Route-based code splitting for optimal loading
- **Image Optimization**: Responsive images with proper aspect ratios
- **Caching**: Query-based caching strategy for API responses
- **Bundle Optimization**: Tree-shaking and minification for production builds

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **Styling**: Tailwind CSS, Class Variance Authority, CLSX for conditional styling

### UI Components & Interactions
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Animations**: Framer Motion for smooth animations and transitions
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image galleries and testimonials

### Data Management
- **HTTP Client**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type checking and form validation
- **Date Utilities**: Date-fns for date formatting and manipulation

### Database & Backend
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Store**: Connect-pg-simple for PostgreSQL session storage
- **Schema Validation**: Drizzle-Zod for database schema validation

### Development Tools
- **Runtime**: TSX for TypeScript execution in development
- **Build**: ESBuild for server-side bundling
- **Replit Integration**: Replit-specific plugins for development environment
- **Error Handling**: Runtime error overlay for development debugging

### External Fonts & Assets
- **Typography**: Google Fonts (Cormorant Garamond, Inter)
- **Icons**: Font Awesome for social media and supplementary icons
- **Images**: Unsplash integration for high-quality stock photography