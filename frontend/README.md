# 💧 Water Vision Fountains — Official Website

> **Live:** [watervisionfountains.in](https://www.watervisionfountains.in)  
> **Status:** ✅ Production — Frontend Live | 🔧 Backend — Coming Soon

A fully responsive, SEO-optimised business website built for **Water Vision Fountains** — Kerala's leading manufacturer and installer of Musical, Dancing, Multimedia, and Floating Fountain Systems.

---

## 🖥️ Project Overview

This project was designed, developed, and deployed as a complete client delivery. The site covers the company's full portfolio — services, in-house technology, completed projects across India, and a media gallery — with direct WhatsApp and email inquiry integration.

The domain `watervisionfountains.in` was purchased, connected, and deployed on **Vercel** with full SEO configuration.

---

## ✨ What Was Built

### Pages
| Route | Description |
|---|---|
| `/` | Full single-page website with all sections |
| `/gallery` | Dedicated full-screen masonry gallery (19 images + 2 videos) |
| `/projects/kerala` | All Kerala projects — 12 installations |
| `/projects/other-states` | Projects across Karnataka, Goa, Telangana, Meghalaya & more |

### Sections on Homepage
| Section | Details |
|---|---|
| **Hero** | Full-viewport animated banner with water effects and company stats |
| **About** | Company background, founding year, project count |
| **Why Choose Us** | 6 USP highlight cards with custom SVG icons |
| **Services** | 6 fountain service types with real project images |
| **Technology** | 9 in-house technology cards with View More toggle |
| **Projects** | Kerala + Other States categories, 3 preview cards each |
| **Gallery** | 6 preview images with lightbox + link to full gallery page |
| **Contact** | Project inquiry form — dispatches via WhatsApp API & Email |

---

## 🛠️ Services Showcased

1. **Musical Dancing Fountain** — Symphonic water, light, and music choreographies
2. **Multimedia Laser Show** — 3D graphics projected onto water screens
3. **Floating Fountains** — Self-adjusting lake systems with aeration
4. **Still Fountain** — Classic architectural installations for lobbies and plazas
5. **Water Curtains** — Vertical water walls for interior partitions
6. **Interactive Play Fountains** — Flush-to-ground sensor-based water plazas

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM v6 |
| Styling | Plain CSS (per-component) |
| Deployment | Vercel |
| Domain | GoDaddy → `watervisionfountains.in` |

---

## 🔍 SEO Implementation

Full SEO setup included in `index.html`:

- ✅ Keyword-rich `<title>` tag targeting fountain searches across India
- ✅ `<meta description>` optimised for click-through from Google results
- ✅ **Open Graph tags** — rich preview cards when link is shared on WhatsApp/Facebook
- ✅ **Twitter/X card** metadata
- ✅ **LocalBusiness JSON-LD schema** — powers Google Maps, local search sidebar, and knowledge panel
- ✅ **Canonical URL** pointing to `watervisionfountains.in`
- ✅ `public/sitemap.xml` — lists all 4 pages for Google to crawl
- ✅ `public/robots.txt` — instructs search crawlers and points to sitemap

---

## 📁 Project Structure

```
frontend/
├── public/
│   ├── logo.jpeg           # Favicon
│   ├── og-image.png        # Social share preview image (1200×630)
│   ├── sitemap.xml         # Google sitemap
│   └── robots.txt          # Crawler instructions
├── src/
│   ├── assets/
│   │   ├── data.js         # Centralised data — tech, gallery, services, projects
│   │   ├── gallary/        # 19 gallery images + 2 videos
│   │   ├── projects/
│   │   │   ├── kerala/     # 12 Kerala project images
│   │   │   └── other states/ # 13 other states project images
│   │   ├── services/       # 6 service images
│   │   └── technology/     # 9 technology product images
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── WhyChooseUs/
│   │   ├── Services/
│   │   ├── Technology/
│   │   ├── Projects/
│   │   ├── Gallary/
│   │   └── Contact/
│   ├── pages/
│   │   ├── GallaryPage.jsx      # Full gallery page (/gallery)
│   │   ├── GallaryPage.css
│   │   ├── ProjectsPage.jsx     # Projects page (/projects/:category)
│   │   └── ProjectsPage.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html              # SEO meta tags, schema markup
└── README.md
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Backend — Coming Soon

The frontend is fully static. The backend integration is planned for the next phase.

### What the backend will enable

| Feature | Details |
|---|---|
| Contact form API | Store inquiries in a database instead of WhatsApp/Email only |
| Admin dashboard | Client can manage projects, gallery, and services without code |
| Dynamic content | Projects and gallery loaded from a database |
| Email notifications | Auto-email on new inquiry submission |

### Planned API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/inquiry` | Submit project inquiry |
| `GET` | `/api/projects` | Fetch projects dynamically |
| `GET` | `/api/gallery` | Fetch gallery media |
| `POST` | `/api/admin/projects` | Add new project (admin) |

### Frontend integration point

When the backend is ready, update `Contact.jsx`:

```js
// Replace current WhatsApp dispatch with:
const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inquiry`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

Add to `.env`:
```
VITE_API_BASE_URL=https://api.watervisionfountains.in
```

---

## 📞 Client

**Water Vision Fountains**  
Kanakkary P.O., Ettumanoor, Kottayam, Kerala – 686632  
📞 +91 94462 87873 / +91 85906 74402  
📧 info@watervisionfountains.com  
🌐 [watervisionfountains.in](https://www.watervisionfountains.in)  
🏷️ GSTIN: 32AHFPL4898K1ZV

---

## 👨‍💻 Developed By

**Jion Biju** — Full Stack Developer  



---

*Built with React + Vite. Deployed on Vercel. Domain via GoDaddy.*
