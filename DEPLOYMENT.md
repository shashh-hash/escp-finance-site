# Deployment Guide - ESCP Finance Website

## Option 1: Vercel (Recommended - Free & Easy)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd escp-finance-site
   vercel
   ```

3. **Follow the prompts**:
   - Login with GitHub/Email
   - Confirm project settings
   - Get your live URL!

Your site will be live at: `https://your-project-name.vercel.app`

---

## Option 2: Netlify (Also Free & Easy)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

---

## Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   "homepage": "https://yourusername.github.io/escp-finance-site",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## Option 4: Build & Share Locally

If you just want to share the built files:

```bash
npm run build
```

This creates a `dist` folder with all static files. You can:
- Zip and share the `dist` folder
- Host it on any static file server
- Use services like Firebase Hosting, AWS S3, etc.

---

## Recommended: Vercel

For the quickest deployment, I recommend **Vercel**. It's free, automatic, and gives you a live URL in under 2 minutes!
