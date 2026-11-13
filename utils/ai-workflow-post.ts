import type { Locale } from "@/i18n-config";

export const aiWorkflowPath = "/blog/ai-in-my-development-workflow";

type Project = {
  title: string;
  paragraphs: string[];
  link?: { href: string; label: string };
};

type Post = {
  title: string;
  description: string;
  intro: string;
  imageAlt: string;
  projects: Project[];
};

export const aiWorkflowPost: Record<Locale, Post> = {
  en: {
    title: "How I use AI in my development workflow",
    description: "How I use Codex, Cursor, and GitHub Copilot across four recent software projects.",
    intro: "I use Codex, Cursor, and GitHub Copilot to plan features, explore code, draft tests, and debug issues. I make the architecture decisions, review the generated changes, and run the relevant tests and type checks before shipping. I pay particular attention to permissions and database writes.",
    imageAlt: "Laptop with a code editor and an open notebook on a desk lit by soft lavender light",
    projects: [
      {
        title: "Hotel operations app",
        paragraphs: [
          "I built a Next.js and TypeScript MVP with a React dashboard, server-side API routes, and PostgreSQL accessed through Drizzle ORM. I kept business rules in a service layer and scoped queries by hotel. For example, checkout closes the stay, marks the room dirty, creates a housekeeping task, and records the activity in one database transaction. If any step fails, the whole operation rolls back.",
          "The app also has a Claude-powered assistant that reads hotel data through defined tools. When it proposes a change, such as assigning a housekeeping task, the app requires human approval before applying it. I used AI coding tools to help implement these workflows and draft tests for the API and approval flow.",
        ],
      },
      {
        title: "I Minati Parrucchieri",
        paragraphs: [
          "I shipped a public salon website and a mobile-first staff admin. The React, Vite, and TypeScript frontend talks to a Python/FastAPI REST API, with Supabase for PostgreSQL and authentication. Staff use the admin to manage appointments, clients, services, and inventory. This is my clearest example of using AI coding tools from planning through production.",
        ],
        link: { href: "/en/work/iminatiparrucchieri", label: "Project case study" },
      },
      {
        title: "Inati Surf website and admin",
        paragraphs: [
          "I built a bilingual Astro website and a separate React and TanStack Start app for booking and administration. Both live in one repository and share branding and assets. I deployed previews to Cloudflare Workers, and the public booking and payment flows are currently in demo mode.",
        ],
      },
      {
        title: "Giulia Minati website",
        paragraphs: [
          "I shipped a static Astro site in English, Spanish, and Italian. It uses shared page components and localized content, and Cloudflare Workers serves the built site as static assets.",
        ],
        link: { href: "https://guiliaminati.com", label: "Visit the website" },
      },
    ],
  },
  es: {
    title: "Cómo uso la IA en mi flujo de trabajo de desarrollo",
    description: "Cómo uso Codex, Cursor y GitHub Copilot en cuatro proyectos de software recientes.",
    intro: "Uso Codex, Cursor y GitHub Copilot para planificar funcionalidades, explorar código, preparar pruebas y depurar errores. Tomo las decisiones de arquitectura, reviso los cambios generados y ejecuto las pruebas y las comprobaciones de tipos pertinentes antes de publicar. Presto especial atención a los permisos y a las escrituras en la base de datos.",
    imageAlt: "Una laptop con un editor de código y un cuaderno abierto sobre un escritorio con luz suave de tonos lavanda",
    projects: [
      {
        title: "Aplicación de operaciones hoteleras",
        paragraphs: [
          "Desarrollé un MVP con Next.js y TypeScript, un panel en React, rutas de API del lado del servidor y PostgreSQL con Drizzle ORM. Mantuve las reglas de negocio en una capa de servicios y limité las consultas al hotel correspondiente. Por ejemplo, al registrar la salida de un huésped, la aplicación cierra la estancia, marca la habitación como sucia, crea una tarea de limpieza y registra la actividad en una sola transacción de base de datos. Si algún paso falla, se revierte toda la operación.",
          "La aplicación también tiene un asistente basado en Claude que consulta datos del hotel mediante herramientas definidas. Cuando propone un cambio, como asignar una tarea de limpieza, la aplicación exige que una persona lo apruebe antes de aplicarlo. Usé herramientas de IA para implementar estos flujos y preparar pruebas de la API y del proceso de aprobación.",
        ],
      },
      {
        title: "I Minati Parrucchieri",
        paragraphs: [
          "Publiqué un sitio web para la peluquería y un panel para el personal, diseñado primero para móviles. El frontend, desarrollado con React, Vite y TypeScript, se comunica con una API REST en Python y FastAPI. Supabase proporciona PostgreSQL y la autenticación. El personal usa el panel para gestionar citas, clientes, servicios e inventario. Es mi ejemplo más claro del uso de herramientas de IA para programar desde la planificación hasta la puesta en producción.",
        ],
        link: { href: "/es/work/iminatiparrucchieri", label: "Caso de estudio del proyecto" },
      },
      {
        title: "Sitio web y panel de Inati Surf",
        paragraphs: [
          "Construí un sitio bilingüe con Astro y una aplicación aparte con React y TanStack Start para reservas y administración. Ambos están en el mismo repositorio y comparten la identidad visual y los recursos. Desplegué versiones de prueba en Cloudflare Workers. Los flujos públicos de reserva y pago están actualmente en modo de demostración.",
        ],
      },
      {
        title: "Sitio web de Giulia Minati",
        paragraphs: [
          "Publiqué un sitio estático con Astro en inglés, español e italiano. Usa componentes de página compartidos y contenido localizado. Cloudflare Workers sirve los archivos estáticos que genera Astro.",
        ],
        link: { href: "https://guiliaminati.com", label: "Visitar el sitio web" },
      },
    ],
  },
};
