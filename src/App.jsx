import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import About from './components/about';
import CTA from './components/cta';
import Footer from './components/footer';
import ChatPage from './components/chat/chatWindow'; // Import the new ChatPage component
import './index.css';

// A single component to hold all of your landing page sections.
const HomePage = ({ theme, setTheme }) => (
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
    // Set the basename dynamically using Vite's environment variable
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-dark-text min-h-screen">
        {/* The Header is placed outside of the Routes so it appears on all pages. */}
        <Header theme={theme} setTheme={setTheme} />

        {/* The Routes component defines which component to render based on the URL. */}
        <main className="">
          <Routes>
            {/* The Home page route */}
            <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />} />
            
            {/* The new Chat page route */}
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
