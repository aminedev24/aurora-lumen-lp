
const MobileMenu = ({ isOpen, toggleMenu }) => {
    return (
        <nav className={`md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-xl mx-4 mt-2 py-2 mobile-nav-menu transition-colors duration-300 ${isOpen ? 'open' : ''}`}>
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 dark:text-dark-text dark:hover:bg-gray-700">Features</a>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 dark:text-dark-text dark:hover:bg-gray-700">About</a>
            <a href="#cta" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-300 dark:text-dark-text dark:hover:bg-gray-700">Newsletter</a>
        </nav>
    );
};

export default MobileMenu;
