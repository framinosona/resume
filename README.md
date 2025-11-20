# 🦄 Francois Raminosona - Portfolio & Resume

A modern, responsive portfolio and resume website built with Astro, TypeScript, and Tailwind CSS. Showcasing projects, hackathons, professional experience, and achievements with a beautiful, performant design.

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **🎨 Modern Design** - Clean, professional interface with dark/light theme support
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ High Performance** - Built with Astro for optimal loading speeds
- **🔍 Advanced Search** - Fuzzy search across all content with Fuse.js
- **📝 Content Management** - Markdown-based content with Zod schema validation
- **🎯 SEO Optimized** - Meta tags, sitemap, and structured data
- **♿ Accessible** - WCAG compliant with semantic HTML
- **🚀 Auto-Deploy** - GitHub Actions workflow for continuous deployment

## 🏗️ Project Structure

```text
/
├── public/
│   ├── images/           # Project banners, logos, profile images
│   ├── documents/        # Resume PDFs and certificates
│   └── projects/         # Project-specific assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ProjectCard.astro
│   │   ├── HackathonCard.astro
│   │   ├── JobCard.astro
│   │   └── ...
│   ├── content/          # Markdown content collections
│   │   ├── projects/     # Project descriptions
│   │   ├── hackathons/   # Hackathon stories
│   │   ├── jobs/         # Professional experience
│   │   ├── education/    # Educational background
│   │   └── diplomas/     # Certifications
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages and routes
│   └── styles/           # Global CSS styles
└── .github/
    └── workflows/        # GitHub Actions for deployment
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Get help using the Astro CLI                    |

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/framinosona/Resume.astro.git
   cd Resume.astro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   ```text
   http://localhost:4321
   ```

## 📝 Content Management

### Adding New Projects

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Your Project Name"
description: "Brief description of your project"
startDate: "2024-01-15"
technologies: ["TypeScript", "React", "Node.js"]
bannerImage: "/images/projects/your-project/banner.jpg"
isFeatured: true
tags: ["Web Development", "Full Stack"]
---

Your detailed project description here...
```

### Content Collections

The site uses Astro's content collections with Zod schemas for type safety:

- **Projects** (`src/content/projects/`) - Professional and personal projects
- **Hackathons** (`src/content/hackathons/`) - Hackathon participations and wins
- **Jobs** (`src/content/jobs/`) - Professional work experience
- **Education** (`src/content/education/`) - Educational programs and courses
- **Diplomas** (`src/content/diplomas/`) - Certifications and achievements

## 🎨 Customization

### Theme Colors

Update brand colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#your-color',
        secondary: '#your-color',
        // ...
      }
    }
  }
}
```

### Components

All UI components are modular and reusable:

- `ProjectCard.astro` - Project display component
- `HackathonCard.astro` - Hackathon story component
- `JobCard.astro` - Professional experience component
- And more...

## 🔍 Search Functionality

The site includes a powerful search feature powered by Fuse.js:

- Fuzzy search across all content types
- Filter by content type (projects, hackathons, jobs, etc.)
- Sort by relevance, date, or title
- Real-time search suggestions

## 🚀 Deployment

### GitHub Pages (Automatic)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Push to `main` branch - deployment happens automatically!

### Manual Deployment

1. Build the site:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting provider

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Fuse.js](https://fusejs.io)** - Fuzzy search library
- **[Zod](https://zod.dev)** - Schema validation
- **[MDX](https://mdxjs.com)** - Enhanced Markdown support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/framinosona/Resume.astro/issues).

## 📬 Contact

### Francois Raminosona

- Website: [francois.raminosona.com](https://francois.raminosona.com)
- GitHub: [@framinosona](https://github.com/framinosona)
- LinkedIn: [francois-raminosona](https://linkedin.com/in/francois-raminosona)
- Email: [framinosona@hotmail.fr](mailto:framinosona@hotmail.fr)

---

⭐ If you like this project, please give it a star on GitHub!
