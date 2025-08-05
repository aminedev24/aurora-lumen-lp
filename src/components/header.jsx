import { useState } from 'react';

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative bg-white dark:bg-gray-800 shadow-lg py-4 px-6 md:px-10 lg:px-16 flex justify-between items-center border-b border-primary-light dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center">
          <a href="/" className="flex items-center group">
            <svg className="w-9 h-9 text-primary mr-2 dark:text-secondary group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h1 className="text-2xl font-extrabold text-gray-800 dark:text-dark-text">Aurora Nexus</h1>
          </a>
        </div>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          <a href="#features" className="text-gray-700 hover:text-secondary font-medium transition duration-300 transform hover:scale-105 dark:text-dark-text dark:hover:text-secondary">Features</a>
          <a href="#about" className="text-gray-700 hover:text-secondary font-medium transition duration-300 transform hover:scale-105 dark:text-dark-text dark:hover:text-secondary">About</a>
          <a href="#cta" className="text-gray-700 hover:text-secondary font-medium transition duration-300 transform hover:scale-105 dark:text-dark-text dark:hover:text-secondary">Newsletter</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-accent transition-colors duration-300"
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6 text-gray-700 dark:text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-7.757l-.707.707M5.38 18.38l-.707.707M18.38 5.38l.707-.707M5.38 5.38l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700 dark:text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-secondary focus:outline-none dark:text-dark-text dark:hover:text-secondary"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-xl mx-4 mt-2 py-2 mobile-nav-menu transition-colors duration-300">
          <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 dark:text-dark-text dark:hover:bg-gray-700">Features</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 dark:text-dark-text dark:hover:bg-gray-700">About</a>
          <a href="#cta" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 dark:text-dark-text dark:hover:bg-gray-700">Newsletter</a>
        </nav>
      )}
    </>
  );
}