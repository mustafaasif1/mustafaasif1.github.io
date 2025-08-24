import React from 'react';
import NavBar from './navBar';
import ThemeToggle from './themeToggle';
import { useTranslation } from 'react-i18next';
import './styles/header.css';

const Header = ({ active }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <NavBar active={active} />
        <div className="header-controls">
          <button
            onClick={toggleLanguage}
            className="language-toggle-container"
            aria-label={
              i18n.language === 'en'
                ? 'Switch to German'
                : 'Zu Englisch wechseln'
            }
          >
            {i18n.language === 'en' ? 'DE' : 'EN'}
          </button>
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
