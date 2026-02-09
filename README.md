# Explore Sri Lanka With Us 🌴

A modern, high-performance React application designed to showcase Sri Lanka as a premier travel destination. Built with a focus on immersive user experience, SEO optimization, and performance.

## 🚀 Key Features

### 🎨 Modern UI/UX
- **Immersive Design**: Full-screen parallax hero sections, glassmorphism effects, and smooth scroll animations.
- **Responsive Layouts**: Fully optimized for Mobile, Tablet, and Desktop using CSS Grid and Flexbox.
- **Interactive Elements**: Hover effects, animated step indicators, and dynamic content cards.

### ⚡ Performance Optimization
- **Component Lazy Loading**: Route-based code splitting using `React.lazy` and `Suspense` ensures fast initial load times.
- **Efficient Asset Loading**: Native `loading="lazy"` attributes for images to save bandwidth.
- **Vite Build Tool**: Utilizes Vite for lightning-fast HMR (Hot Module Replacement) and optimized production builds.

### 🔍 SEO Friendly
- **Dynamic Metadata**: Integrated `react-helmet-async` to manage unique `title`, `description`, and `keywords` for every page.
- **Semantic HTML**: Structured content for better accessibility and search engine indexing.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Modern CSS3 (CSS Variables, clamp() typography, localized stylesheets)
- **SEO**: React Helmet Async
- **Icons**: React Icons (FontAwesome)

## 📂 Project Structure

```
src/
├── assets/          # Static images and global resources
├── components/      # Reusable UI components (Header, Footer, Button)
├── pages/           # Page-level components (Home, Destinations, etc.)
│   ├── Home.jsx
│   ├── Home.css     # Localized styles for Home page
│   └── ...
├── App.jsx          # Main application layout and routing
├── main.jsx         # Application entry point with Providers
└── index.css        # Global styles and CSS variables
```

## 💻 Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📝 Developer Notes

- **CSS Strategy**: We use variable-based scaling (`clamp()`) for typography and spacing to reduce media query dependency.
- **State Management**: Local component state is sufficient for current requirements; routed via URL parameters where necessary (e.g., anchor links).
- **SEO Strategy**: `HelmetProvider` wraps the app at the root level (`App.jsx`) to ensure meta tags are correctly injected into the `<head>`.

