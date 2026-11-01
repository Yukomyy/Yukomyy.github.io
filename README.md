# Fahmi Irfan — Software & Data Developer Portfolio

A typography-led, Swiss-editorial personal portfolio built with **Next.js (Static Export)**, **TypeScript**, and **Tailwind CSS** for an Information Systems candidate targeting:
1. **Software Engineering (SE)**
2. **Data Analytics (DA)**
3. **Data Engineering (DE)**
4. **Data Science (DS)**
5. **Web Development**

---

## Features & Architecture

- **Swiss Editorial Grid & Visual System**: Warm off-white canvas (`#F8F8F5`), near-black typography (`#171717`), hairline architectural borders (`#E7E7E3`), and restrained cobalt blue accents (`#365BD6`) with an optional Dark Mode toggle.
- **Bilingual Support (`EN / ID`)**: Instant client-side switching between English and Bahasa Indonesia across all sections and project case studies.
- **HRD-First UX**: Immediate candidate specification box, honest proficiency tiers (`Primary Focus`, `Working Knowledge`, `Currently Learning`), direct resume PDF download, and one-click email copy.
- **Deep-Dive Case Studies (`/projects/[slug]`)**: Each featured project includes a full 11-part engineering case study with bespoke technical SVG architecture diagrams, SQL/TypeScript/Python code excerpts, and trade-off analyses.
- **Zero-Cost GitHub Pages Ready**: Pre-configured with `output: "export"` in `next.config.ts`, `.nojekyll`, and an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

---

## Quick Customization Guide

1. **Edit Personal Info, Projects, Skills & Timeline**:
   Open [`src/data/portfolio.ts`](./src/data/portfolio.ts). All text, links, project metrics, and university placeholders are centralized in this single file.
2. **Replace Resume PDF**:
   Replace `public/resume-fahmi-irfan.pdf` with your latest CV/Resume PDF (keep the filename or update `resumePath` in `src/data/portfolio.ts`).

---

## Local Development & Static Build

```bash
# Start local development server
npm run dev

# Build static export into ./out directory
npm run build
```

---

## Free Deployment on GitHub Pages

This project includes an automated GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically detects your repository path (`username.github.io` or `username.github.io/repo-name`) and deploys the static `out/` build for free:

1. Create a new public repository on GitHub (e.g. `fahmiirfan.github.io` or `web-porto`).
2. In your GitHub repository, go to **Settings → Pages** and under **Build and deployment → Source**, select **GitHub Actions**.
3. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
4. GitHub Actions will automatically build and publish your live site within ~60 seconds.
