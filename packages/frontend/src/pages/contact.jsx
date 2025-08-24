import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import Header from '../components/common/header';
import Socials from '../components/about/socials';
import SEO from '../data/seo';
import INFO from '../data/user';

import './styles/contact.css';
import '../components/common/styles/header.css';

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'contact');

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('contact.pageTitle', { title: INFO.main.title })}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(', ')} />
      </Helmet>

      <div className="page-content">
        <Header active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">{t('contact.title')}</div>

            <div className="subtitle contact-subtitle">
              <Trans
                i18nKey="contact.description"
                values={{ email: INFO.main.email }}
                components={{
                  email: (
                    <a
                      href={`mailto:${INFO.main.email}`}
                      aria-label={t('contact.aria.emailLink', {
                        email: INFO.main.email,
                      })}
                    />
                  ),
                  linkedin: (
                    <a
                      href={INFO.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t('contact.aria.linkedinLink')}
                    />
                  ),
                }}
              />
            </div>
          </div>

          <div
            className="socials-container"
            aria-label={t('contact.aria.socialsSection')}
          >
            <div className="contact-socials">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
