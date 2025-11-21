# ESCP Finance Website - Technical Overview

## Architecture & Tech Stack

### Core Framework
- **React 18** with Vite as the build tool (chose Vite over CRA for faster HMR and better dev experience)
- **React Router DOM** for client-side routing
- **Tailwind CSS** for utility-first styling

### Key Libraries
- **Framer Motion** - For smooth animations and transitions
- **Lucide React** - Icon library (lightweight alternative to Font Awesome)

## Design Philosophy

### "Nothing" Aesthetic
Inspired by the Nothing Phone brand - minimalist, industrial, monochrome with strategic red accents.

**Design Tokens:**
- Primary: `#000000` (Nothing Black)
- Accent: `#D71921` (Nothing Red)
- Typography: DotGothic16 (dot matrix font for that industrial feel)
- Grid pattern background for depth

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:768px`, `lg:1024px`
- Custom hamburger menu for mobile with smooth animations

## Key Features Implementation

### 1. Routing Structure
```javascript
// App.jsx - Clean route organization
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/events" element={<Events />} />
  // ... etc
</Routes>
```

**GitHub Pages Fix:**
Added `basename="/escp-finance-site"` to BrowserRouter to handle subdirectory routing.

### 2. Animation System
Used Framer Motion for:
- Page transitions (`initial`, `animate`, `exit`)
- Scroll-triggered animations (removed flickering ones for smooth UX)
- Easter egg animations

**Example:**
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### 3. Component Architecture

**Reusable Components:**
- `EventCard.jsx` - Event display with image, date, location
- `StockTicker.jsx` - Animated marquee for stock prices
- `Navbar.jsx` - Responsive navigation with mobile menu
- `Footer.jsx` - Site footer with social links

**Layout Pattern:**
```
App.jsx (Router + Global State)
├── Navbar
├── Routes (Pages)
│   ├── Home
│   ├── Articles
│   └── ...
├── Footer
└── Easter Eggs
```

### 4. State Management
No Redux needed - used React hooks for local state:
- `useState` for UI state (menu open/close, easter eggs)
- `useEffect` for side effects (keyboard listeners, scroll handlers)
- Props drilling for simple data flow

### 5. Easter Eggs Implementation

**Matrix Mode:**
- Keyboard listener for 'M' key
- CSS class toggle (`matrix-mode`)
- Green filter applied globally

**Money Rain:**
- Click counter on logo (5 clicks triggers)
- Animated dollar bills using Framer Motion
- Auto-cleanup after animation

**Stock Crash:**
- Double-click logo trigger
- Falling stock symbols with random positions
- Red flash overlay effect

**Stonks Mode:**
- Typed text detection ("stonks")
- Dynamic font override to Comic Sans
- Bouncing emoji overlays

**Financial Times Easter Egg:**
- Hidden link on period in headline
- Full mock login page
- Email validation for ESCP domain

### 6. Performance Optimizations

**Build Configuration:**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/escp-finance-site/', // GitHub Pages
})
```

**Image Optimization:**
- Used Unsplash CDN with `auto=format&fit=crop&q=80`
- Lazy loading for images
- Grayscale filter with hover color reveal

**Code Splitting:**
- React Router handles automatic code splitting per route
- Reduced initial bundle size

## Deployment Pipeline

### GitHub Actions Workflow
Created `.github/workflows/deploy.yml`:

```yaml
- Build with Vite
- Upload artifacts
- Deploy to GitHub Pages
```

**Automatic deployment on push to main branch.**

### Local Development
```bash
npm install
npm run dev  # Runs on localhost:5174
npm run build  # Production build
```

## Styling Approach

### Tailwind Configuration
Custom theme in `tailwind.config.js`:
- Custom colors (nothing-black, nothing-red)
- Custom fonts (DotGothic16)
- Custom animations (glitch effect)

### CSS Architecture
```
index.css
├── Tailwind directives
├── Global styles (smooth scroll, cursor)
├── Utility classes (bg-grid, glass-nav)
└── Matrix mode styles
```

### Design Patterns
- Consistent spacing scale (4px base)
- Border style: `border border-white/10`
- Hover effects: `hover:border-nothing-red transition-colors`
- Typography hierarchy with uppercase tracking

## Challenges & Solutions

### 1. GitHub Pages Routing
**Problem:** Blank homepage on direct URL access
**Solution:** Added `basename` prop to BrowserRouter

### 2. Mobile Menu
**Problem:** Hamburger menu not functional
**Solution:** Added state management + AnimatePresence for smooth open/close

### 3. Smooth Scrolling
**Problem:** Flickering animations on scroll
**Solution:** Removed opacity-based `whileInView` animations, added `scroll-behavior: smooth`

### 4. Image Loading
**Problem:** Some images not rendering
**Solution:** Verified all image URLs, used reliable CDN sources

## File Structure
```
escp-finance-site/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── EventCard.jsx
│   │   ├── StockTicker.jsx
│   │   ├── EasterEgg.jsx
│   │   ├── MoneyRain.jsx
│   │   ├── StockCrash.jsx
│   │   └── StonksMode.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Articles.jsx
│   │   ├── Events.jsx
│   │   ├── Resources.jsx
│   │   ├── Partners.jsx
│   │   ├── About.jsx
│   │   ├── Join.jsx
│   │   ├── Contact.jsx
│   │   └── FinancialTimes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .github/workflows/deploy.yml
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Development Timeline

**Phase 1:** Project Setup & Design System (Day 1)
- Initialized Vite + React
- Configured Tailwind with custom theme
- Designed "Nothing" aesthetic

**Phase 2:** Core Pages (Day 1-2)
- Built Home, Articles, Events pages
- Created reusable components
- Implemented routing

**Phase 3:** Content & Polish (Day 2)
- Added remaining pages (Resources, Partners, About, Join, Contact)
- Populated with content
- Added images and visuals

**Phase 4:** Easter Eggs (Day 2-3)
- Implemented Konami Code
- Added Money Rain, Matrix Mode
- Created Financial Times mock page
- Added Stock Crash and Stonks Mode

**Phase 5:** Deployment (Day 3)
- Set up GitHub Actions
- Fixed routing issues
- Deployed to GitHub Pages

## Future Enhancements

- [ ] Add blog CMS integration
- [ ] Implement event registration system
- [ ] Add member portal with authentication
- [ ] Create admin dashboard
- [ ] Add analytics tracking
- [ ] Implement newsletter signup

## Resources Used

- **Design Inspiration:** Nothing Phone, Bloomberg Terminal, Financial Times
- **Icons:** Lucide React
- **Images:** Unsplash
- **Fonts:** Google Fonts (DotGothic16)
- **Animations:** Framer Motion docs
- **Deployment:** GitHub Pages + Actions

---

**Total Development Time:** ~3 days
**Lines of Code:** ~3,000
**Components:** 17
**Pages:** 9
**Easter Eggs:** 6
