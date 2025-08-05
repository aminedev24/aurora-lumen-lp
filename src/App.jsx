import { useEffect, useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import About from './components/about';
import CTA from './components/cta';
import Footer from './components/footer';
import './index.css';
import TailwindColorTest from './components/tailwindTest';

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-dark-text">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;