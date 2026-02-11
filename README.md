# Ismaila Abdullahi Adavize — Portfolio

Modern, responsive portfolio built with Next.js (App Router), Tailwind CSS, Framer Motion, and EmailJS.

## Features

- Modern, minimalist UI with dark/light mode
- Fully responsive and mobile-first
- Smooth animations with Framer Motion
- Data-driven sections (projects, skills, experience)
- SEO-friendly metadata and accessible components
- Contact form powered by EmailJS (API-ready)

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React icons

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Environment Variables

Create `.env` in the project root (already provided with placeholders):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the values with your EmailJS credentials.

## Content Updates

- Update profile info: `src/data/site.ts`
- Update social links: `src/data/socials.ts`
- Update skills: `src/data/skills.ts`
- Update projects: `src/data/projects.ts`
- Update experience: `src/data/experience.ts`
- Update certifications: `src/data/certifications.ts`

## CV Download

Add your CV PDF to:

```
public/cv/Ismaila_Adavize_CV.pdf
```

## Project Structure

```
src/
	app/                # Next.js App Router
	components/
		layout/           # Navbar, Footer, Theme Toggle
		providers/        # Theme Provider
		sections/         # Page sections
		ui/               # Reusable UI components
	data/               # JSON-like data sources
```

## Deployment

### Vercel
- Push to GitHub
- Import the repo in Vercel
- Add EmailJS env variables

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`

## Notes

- Replace placeholder links in `src/data/projects.ts` and `src/data/socials.ts`.
- Provide a real CV file for the download link.

