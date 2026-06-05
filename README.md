# Haseeb Ahmed — Futuristic Portfolio

A premium, futuristic personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**,
plus a small **Node.js + Express + Nodemailer** backend so the contact form sends real email.

## Folder structure
```
haseeb-portfolio/
├── index.html, package.json, vite.config.js
├── tailwind.config.js, postcss.config.js
├── public/
│   └── resume.pdf                  # <-- your downloadable resume (replace this file)
├── server/                         # backend that sends email
│   ├── server.js
│   ├── package.json
│   └── .env.example                # copy to .env and fill in
└── src/
    ├── main.jsx, App.jsx, index.css
    ├── context/ThemeContext.jsx
    ├── data/portfolio.js           # <-- EDIT THIS to change all content
    └── components/  (Navbar, Hero, About, Skills, SkillCard, Experience,
                      Projects, ProjectCard, Education, Contact,
                      SectionHeading, Footer, ParticleBackground, ThemeToggle)
```

## 1) Run the frontend
1. Install Node.js 18+ (check: `node --version`).
2. Open this folder in VS Code.
3. In a terminal:
   ```
   npm install
   npm run dev
   ```
4. Open the printed link (usually http://localhost:5173).

## 2) Run the backend (so the contact form sends email)
1. Open a SECOND terminal and go into the server folder:
   ```
   cd server
   npm install
   ```
2. Copy `.env.example` to a new file named `.env` and fill it in:
   - `EMAIL_USER` = your Gmail address (the sender)
   - `EMAIL_PASS` = a Gmail **App Password** (16 chars) — see below
   - `EMAIL_TO`   = where messages should arrive (your inbox)
3. Start the server:
   ```
   npm start
   ```
   It runs on http://localhost:5000.

### Getting a Gmail App Password (required by Gmail)
Gmail does NOT allow your normal password here. Instead:
1. Turn on 2-Step Verification: https://myaccount.google.com/security
2. Create an app password: https://myaccount.google.com/apppasswords
3. Paste the 16-character code into `EMAIL_PASS` (no spaces).

With BOTH the frontend (port 5173) and backend (port 5000) running, the
contact form will send real emails to your inbox.

## Editing content
- Change everything in **`src/data/portfolio.js`** (name, titles, skills, projects, etc.).
- Replace **`public/resume.pdf`** with your own file (keep the same name) to update the
  "Download Resume" button.

## Deploying
- Frontend: run `npm run build`, then host the `dist/` folder on Netlify or Vercel.
- Backend: host `server/` on a service like Render or Railway, then update `API_URL`
  in `src/components/Contact.jsx` to your live server URL.
