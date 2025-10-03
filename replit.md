# Overview

This is a personal portfolio website for an AI Engineer showcasing projects, skills, achievements, research, and professional timeline. The application is built as a full-stack web application with a React frontend and Express backend, designed to present a visually striking, AI-themed portfolio with animated neural network backgrounds and modern UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server. The application uses client-side routing with Wouter for navigation.

**UI Component Library**: Leverages shadcn/ui components built on Radix UI primitives, providing accessible and customizable UI components. The design system follows a "new-york" style with Tailwind CSS for styling, featuring a dark, futuristic AI/tech aesthetic with custom CSS variables for theming.

**State Management**: React Query (TanStack Query) is used for server state management with infinite stale time and disabled refetching, indicating primarily static content presentation.

**Styling Approach**: Tailwind CSS with custom design tokens, featuring:
- Custom font stack: Orbitron (headings), Inter (body), JetBrains Mono (code)
- Dark color scheme with cyan, purple, and pink accent colors
- Custom animations for neural network backgrounds and scroll reveals
- CSS-in-JS for complex animations and particle effects

## Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript. The server handles both API routes and static file serving.

**Development Setup**: Vite middleware integration for HMR (Hot Module Replacement) in development, with custom error overlay and Replit-specific plugins for development experience.

**Routing Pattern**: All application routes are prefixed with `/api`, with the backend serving the React SPA for all other routes.

**Storage Layer**: Currently implements in-memory storage using a Map-based implementation (`MemStorage`). The storage interface is designed to be swappable, with methods for user CRUD operations.

**Build Process**: 
- Frontend: Vite builds the React app to `dist/public`
- Backend: esbuild bundles the Express server to `dist/index.js` as ESM modules
- Production deployment serves pre-built static files

## Database Architecture

**ORM**: Drizzle ORM configured for PostgreSQL dialect with migrations stored in `./migrations` directory.

**Database Provider**: Configured to use Neon serverless PostgreSQL (via `@neondatabase/serverless` package).

**Schema Design**: Currently defines a basic `users` table with UUID primary keys, username (unique), and password fields. Schema is defined in `shared/schema.ts` for use across both client and server.

**Validation**: Uses Drizzle-Zod for runtime schema validation, creating type-safe insert schemas from database definitions.

**Session Management**: Includes `connect-pg-simple` for PostgreSQL-backed session storage, though session implementation is not yet active in the codebase.

## External Dependencies

**UI Framework**:
- Radix UI primitives for accessible component foundations
- shadcn/ui component system
- Tailwind CSS for utility-first styling
- class-variance-authority for component variant management

**Database & ORM**:
- Neon Serverless PostgreSQL for database hosting
- Drizzle ORM for database operations
- Drizzle Kit for migrations

**State & Data Fetching**:
- TanStack React Query for server state management
- React Hook Form with Zod resolvers for form handling

**Development Tools**:
- Vite for frontend tooling
- esbuild for backend bundling
- TypeScript for type safety
- Replit-specific plugins for development environment integration

**Routing & Navigation**:
- Wouter for client-side routing

**Image Assets**: Profile image stored in `attached_assets` directory and aliased via Vite config for easy imports.

## Design Patterns

**Monorepo Structure**: Organized as a monorepo with `client/`, `server/`, and `shared/` directories, enabling code sharing between frontend and backend (particularly for types and schemas).

**API Communication**: Centralized API request handling through `apiRequest` utility with automatic error handling and credential inclusion for authenticated requests.

**Component Organization**: UI components separated into feature components (`components/`) and primitive UI components (`components/ui/`), following atomic design principles.

**Type Safety**: Shared TypeScript types between client and server via path aliases (`@shared/*`), ensuring consistency across the stack.

**Environment Configuration**: Database URL and other secrets managed through environment variables with validation at config time.