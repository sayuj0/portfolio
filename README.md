# Sayuj Shrestha Portfolio

A responsive, single-page developer portfolio built with React and Vite.

## Overview

This project showcases:
- Technical skills
- Work experience
- Featured projects with detailed modals
- Certifications
- Contact information

It also includes:
- Animated WebGL particle background (OGL)
- Mobile-friendly navigation
- Resume support (download from Hero, view in browser from Footer)

## Tech Stack

- React
- Vite
- JavaScript (ES modules)
- CSS
- OGL (WebGL particles)

## Project Structure

```text
src/
  components/      # Navbar, footer, shared UI pieces
  data/            # Skills and content data
  sections/        # Hero, Skills, Experience, Projects, Certifications, Contact
  styles/          # Global and section-specific styles
  utils/           # Path/base helpers
  App.jsx
  main.jsx
public/
  images/
  resume/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Resume Setup

Place your resume file here:

```text
public/resume/resume.pdf
```

## Deployment (GitHub Pages)

This repo uses GitHub Actions workflow:

```text
.github/workflows/deploy.yml
```

### Pages settings

1. Go to `Settings -> Pages`
2. Set **Source** to **GitHub Actions**
3. Push to `main` to trigger deployment

## Custom Domain

If you use a custom domain (example: `www.sayuj.dev`):

1. In `Settings -> Pages`, set **Custom domain**
2. Add DNS record:
   - Type: `CNAME`
   - Host: `www`
   - Value: `sayuj0.github.io`
3. Enable **Enforce HTTPS** after DNS propagation

## License

Personal portfolio project.


