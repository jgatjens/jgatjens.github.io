# jgatjens.com

A modern, multilingual portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a content-managed project showcase, bilingual support (English/Spanish), and dynamic PDF generation.

## 🌟 Features

- **Next.js 14** - Server components, static generation, and optimizations
- **TypeScript** - Full type safety across the codebase
- **Tailwind CSS** - Utility-first CSS with custom design system
- **i18n Support** - Bilingual content (English & Spanish)
- **CMS Integration** - Strapi API for dynamic content management
- **PDF Generation** - Automated resume PDF creation using Puppeteer
- **3D Effects** - Three.js integration for interactive 3D elements
- **Responsive Design** - Mobile-first, fully responsive layout
- **Component System** - Storybook for component documentation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ or higher
- **npm** or **yarn** package manager
- **API Server** - Strapi instance running (see [api.jgatjens.com](../api.jgatjens.com))

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and update it with your API settings:

```bash
cp env.example .env.local
```

**`.env.local` configuration:**

```env
# Strapi API URL
API_URL=http://localhost:1337/api

# (Optional) Vercel deployment URL for PDF generation
VERCEL_URL=http://localhost:3000
```

### 3. Sync Data from API

Before running the project, sync the latest content from your Strapi API:

```bash
npm run sync-data
```

This command:
- Fetches content from Strapi API for all pages
- Saves data locally to `http/` directory in JSON format
- Supports both English and Spanish locales
- Fetches the following pages:
  - **homepage** - Profile, hire me section, open graph data
  - **resume** - Work history, education, open graph data
  - **work** - Project portfolio with media, categories, open graph data

**Output files:**
- `http/homepage.en.json` / `http/homepage.es.json`
- `http/resume.en.json` / `http/resume.es.json`
- `http/work.en.json` / `http/work.es.json`

### 4. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

- Pages are hot-reloaded as you save changes
- Navigate to different languages: `/en/` and `/es/`

## 📦 Building & Deployment

### Build for Production

```bash
npm run build
```

This generates optimized production builds and pre-renders static pages.

### Start Production Server

```bash
npm start
```

Runs the built application in production mode.

## 🎯 Available Scripts

### Development & Building

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (static generation) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

### Content & Assets

| Command | Description |
|---------|-------------|
| `npm run sync-data` | Fetch latest content from Strapi API and save locally |
| `npm run pdf` | Generate resume PDFs (EN & ES) using Puppeteer |

### Component Development

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook component explorer on port 6006 |
| `npm run build-storybook` | Build static Storybook for deployment |

## 📥 Syncing Content from Strapi API

The `sync-data` script automatically fetches content from your Strapi instance and caches it locally.

### How It Works

1. **Reads configuration** from `.env.local` (API_URL)
2. **Fetches data** for each page and locale:
   - Populates all required fields and relationships
   - Includes media, categories, and metadata
3. **Saves locally** to `http/` directory as JSON
4. **Provides feedback** with detailed logging

### Run Manual Sync

```bash
npm run sync-data
```

**Example output:**
```
🔄 Starting data sync from API...

📡 Fetching homepage (en)... http://localhost:1337/api/homepage?populate[0]=...
✅ Saved homepage.en.json

📡 Fetching homepage (es)...
✅ Saved homepage.es.json

✨ Data sync complete!
```

### Automatic Sync on Deployment

For production deployments (e.g., Vercel), add the sync command to your build script:

```json
{
  "scripts": {
    "build": "npm run sync-data && next build"
  }
}
```

## 📄 PDF Generation

Generate resume PDFs for both English and Spanish versions.

### Run PDF Generation

```bash
npm run pdf
```

**Generated files:**
- `public/assets/pdf/jgatjens-resume-en.pdf` (English)
- `public/assets/pdf/jgatjens-resume-es.pdf` (Spanish)

### How It Works

1. **Uses Puppeteer** to render pages as PDFs
2. **Generates from** the resume pages (`/en/resume`, `/es/resume`)
3. **Outputs** A4 formatted PDFs to the public folder
4. **Respects styling** - Tailwind CSS styles are included

### Prerequisites for PDF Generation

- **Development**: Puppeteer automatically downloads Chromium
- **Production** (Vercel): Chromium is pre-installed
- **Docker**: May need `libgconf-2-4` and other system dependencies

### Customizing PDF Output

Edit `utils/pdf.js` to customize:
- PDF format (A4, Letter, etc.)
- Print background colors
- Page margins
- Authentication (uncomment `page.authenticate()` if needed)

## 📁 Project Structure

```
jgatjens.com/
├── app/                          # Next.js app directory
│   └── [lang]/                   # Dynamic language routing
│       ├── page.tsx              # Home page
│       ├── work/                 # Portfolio pages
│       │   ├── page.tsx          # All projects
│       │   └── [slug]/           # Individual project details
│       └── resume/               # Resume page
│
├── components/                   # Reusable React components
│   ├── work-detail/              # Project detail components
│   │   ├── project-hero.tsx
│   │   ├── project-role-tech.tsx # My Role + Tech Stack section
│   │   └── project-navigation.tsx
│   ├── project-item/             # Project grid with filters
│   ├── button/
│   ├── icons/                    # SVG icon components
│   └── ...
│
├── dictionaries/                 # Translation files
│   ├── en.json                   # English translations
│   └── es.json                   # Spanish translations
│
├── http/                         # Local data cache
│   ├── homepage.en.json          # Synced from API
│   ├── resume.en.json
│   ├── work.en.json
│   └── ...
│
├── public/                       # Static assets
│   ├── assets/
│   │   └── pdf/                  # Generated PDFs
│   ├── robots.txt
│   └── sitemap.xml
│
├── utils/                        # Utility functions & scripts
│   ├── sync-data.ts              # API data sync script
│   ├── pdf.js                    # PDF generation script
│   ├── categories.ts             # Category definitions
│   ├── metadata.ts               # SEO metadata utilities
│   └── types.ts                  # TypeScript type definitions
│
├── middleware.ts                 # i18n locale detection middleware
├── i18n-config.ts               # i18n configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

## 🌐 Internationalization (i18n)

The site supports English and Spanish with automatic locale detection.

### Supported Locales

- **`en`** - English
- **`es`** - Spanish (Costa Rican)

### URL Patterns

- English: `/en/*`
- Spanish: `/es/*`

### How Translation Works

1. **Middleware** (`middleware.ts`) detects user locale from:
   - URL path (`/en/`, `/es/`)
   - Browser Accept-Language header
   - Default fallback to English

2. **Dictionaries** (`dictionaries/`) provide UI strings
   - `en.json` - English text
   - `es.json` - Spanish text

3. **CMS Content** - Managed per locale in Strapi

### Using Translations

```typescript
const dict = await getDictionary(locale);
<h1>{dict.work_title}</h1>
```

## 🛠 Development Workflow

### 1. Make Content Changes in Strapi

Update content in your Strapi admin panel at `http://localhost:1337/admin`

### 2. Sync Latest Data

```bash
npm run sync-data
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. View Changes

The site auto-reloads with new content from the local cache

### 5. Build for Production

```bash
npm run build
npm start
```

## 📊 Data Flow

```
Strapi API (CMS)
    ↓
npm run sync-data (fetches & caches)
    ↓
http/ directory (JSON files)
    ↓
Next.js (reads local cache)
    ↓
Static HTML pages
    ↓
Deployed site
```

## 🎨 Component Development

View and develop components in isolation using Storybook:

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore components.

## 🔒 Environment Variables

### `.env.local` Template

```env
# Required
API_URL=http://localhost:1337/api

# Optional (for PDF generation in production)
VERCEL_URL=http://localhost:3000
```

### Environment Setup by Platform

**Local Development:**
```env
API_URL=http://localhost:1337/api
```

**Vercel Deployment:**
```env
API_URL=https://your-strapi-instance.com/api
```

**Docker/Container:**
```env
API_URL=http://strapi:1337/api
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository in Vercel
3. Set environment variables in Vercel dashboard
4. Vercel automatically runs `build` script which includes `sync-data`
5. PDFs are auto-generated during build

### Manual Deployment

```bash
# Sync latest content
npm run sync-data

# Generate PDFs
npm run pdf

# Build for production
npm run build

# Start server
npm start
```

## 🐛 Troubleshooting

### API Connection Issues

**Problem:** `Error: Failed to fetch from API`

**Solutions:**
- Verify Strapi is running: `http://localhost:1337/admin`
- Check `API_URL` in `.env.local`
- Ensure API is accessible from your network

### PDF Generation Fails

**Problem:** `Error: Failed to generate PDF`

**Solutions:**
- Verify development server is running: `npm run dev`
- Check Puppeteer has Chromium downloaded
- Ensure `/public/assets/pdf/` directory exists
- Run: `npm run pdf` again after server starts

### Content Not Updating

**Problem:** Old content still displaying

**Solutions:**
- Run `npm run sync-data` to refresh cache
- Clear browser cache (Ctrl+Shift+Delete)
- Check `http/` directory has recent JSON files
- Verify API has published content

### Build Fails

**Problem:** `Build failed with TypeScript errors`

**Solutions:**
- Run `npm run lint` to check for issues
- Verify all types are correct in `utils/types.ts`
- Check console for specific error messages

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Strapi Documentation](https://docs.strapi.io/)
- [Puppeteer Documentation](https://pptr.dev/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check code quality
4. Commit and push
5. Create a pull request

## 📝 License

All rights reserved. Personal portfolio website.

---

**Last Updated:** September 23, 2024
**Version:** 0.1.2

For questions or issues, please refer to the project documentation or contact the maintainer.
