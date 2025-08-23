# Nexus - India's First Hybrid Social Network

## Overview

Nexus is a modern full-stack web application built to showcase India's first indigenous hybrid social networking platform. The project is a multi-page portfolio website featuring a sophisticated dark theme with luxurious gold accents, designed to promote meaningful human-AI conversations and combat social media isolation. The application combines human-to-human interactions with AI companions in a safe, engaging environment focused on quality connections over endless scrolling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing with multiple page sections (Home, About, Features, Mission, Reviews, Blog, Contact)
- **Styling**: Tailwind CSS with custom Nexus brand variables (gold accents, dark theme) and shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions, scroll-based reveals, and loading animations
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development**: Hot module replacement (HMR) integration with Vite middleware
- **API Structure**: RESTful endpoints prefixed with `/api` for clean separation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Migrations**: Automated migration system using drizzle-kit
- **User Model**: Basic user table with UUID primary keys, username, and password fields

### Component Architecture
- **Design System**: shadcn/ui components with Radix UI primitives for accessibility
- **Custom Components**: Reusable Nexus-branded components (Logo, ScrollReveal, LoadingScreen, Navigation)
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animation System**: Scroll-triggered animations with intersection observers for performance

### Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Integrated development server with automatic rebuilds
- **Type Safety**: End-to-end TypeScript with strict compiler options
- **Code Organization**: Feature-based folder structure with clear separation of concerns

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL ORM with schema validation
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth user interactions
- **wouter**: Lightweight React router for single-page application navigation

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework with custom design tokens
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Modern icon library for consistent iconography

### Development Tools
- **vite**: Fast build tool with HMR support
- **typescript**: Static type checking across the entire application
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements

### Form and Validation
- **react-hook-form**: Performant form management with minimal re-renders
- **@hookform/resolvers**: Form validation resolver integration
- **zod**: Schema validation for runtime type safety

### Utilities
- **date-fns**: Modern date manipulation library
- **clsx**: Conditional className utility for dynamic styling
- **nanoid**: Secure random ID generation for unique identifiers