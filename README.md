## Hassan – Developer Portfolio

Modern, production-ready developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.  
Dark, glassmorphism-inspired UI with neon blue/purple gradients and smooth scroll navigation.

### Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (dark theme, responsive design)
- **Animations**: Framer Motion (scroll-based, `whileInView` with `viewport={{ once: true }}`)
- **Icons**: Lucide React
- **Fonts**: `next/font` with Google Poppins

### Project Structure

- `app/layout.tsx` – Global layout, SEO metadata, typography, Navbar + Footer wrapper
- `app/page.tsx` – Home page composing all sections
- `components/Navbar.tsx` – Fixed, blurred navbar with smooth scrolling and active link highlight
- `components/Hero.tsx` – Intro section with typing effect and CTAs
- `components/About.tsx` – Bio and profile highlight
- `components/Skills.tsx` – Glassmorphism skill cards with category badges
- `components/Projects.tsx` – Responsive project grid with GitHub and Live Demo buttons
- `components/Contact.tsx` – Contact form and social links
- `components/Footer.tsx` – Simple footer with social icons

### Setup & Installation

1. **Install dependencies**

```bash
npm install
```

Required dependencies (already in `package.json` if you used the provided commands):

- `next`, `react`, `react-dom`
- `tailwindcss`, `@tailwindcss/postcss`, `postcss`
- `typescript`, `@types/react`, `@types/node`
- `eslint`, `eslint-config-next`
- `framer-motion`
- `lucide-react`

2. **Run the development server**

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Building for Production

```bash
npm run build
npm start
```

This will generate an optimized production build and start the production server.

### Customization

- **Name & Branding**: Update text in `Hero`, `Navbar`, and `Footer` to your own name and links.
- **Social Links**: Replace placeholder GitHub, LinkedIn, and email URLs in `Contact.tsx` and `Footer.tsx`.
- **Projects**: Edit the `PROJECTS` array in `Projects.tsx` to match your real projects.
- **CV Download**: Add your CV as `public/cv.pdf` or change the `href` in `Hero.tsx` to your own file path.

### Notes

- All major styling is handled via **Tailwind CSS utility classes**, with a global dark background (`#0a0a0a`) and blue → purple accent gradients.
- Section entrance animations use **Framer Motion** with `whileInView` and `viewport={{ once: true }}` so they animate once when scrolled into view.
