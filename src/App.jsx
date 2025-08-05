import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import About from './components/about';
import CTA from './components/cta';
import Footer from './components/footer';
import ChatPage from './components/chat/chatWindow'; // Assuming ChatPage is here
import './index.css';

// A single component to hold all of your landing page sections.
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <About />
    <CTA />
    <Footer />
  </>
);



// The main App component now handles the routing.
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
    // We are now explicitly setting the basename to '/'
    // to match the Vite configuration and the server setup.
    <BrowserRouter basename="/">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-dark-text min-h-screen">
        <Header theme={theme} setTheme={setTheme} />
        <main className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
