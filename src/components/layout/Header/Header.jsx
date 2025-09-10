import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">M</span>
            </div>
            <span className="text-white text-xl font-bold">MyPortfolio</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Главная
            </a>
            <a href="#projects" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Проекты
            </a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Обо мне
            </a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Контакты
            </a>
          </nav>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-500">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#home" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                Главная
              </a>
              <a href="#projects" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                Проекты
              </a>
              <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                Обо мне
              </a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;