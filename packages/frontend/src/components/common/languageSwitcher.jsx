import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/languageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={t('common.switchLanguage')}
    >
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
