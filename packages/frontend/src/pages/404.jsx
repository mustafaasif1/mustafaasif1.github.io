import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Logo from '../components/common/logo';
import INFO from '../data/user';

import './styles/404.css';
import '../components/common/styles/header.css';

const Notfound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`404 | ${INFO.main.title}`}</title>
      </Helmet>

      <div className="page-content">
        <Header />
        <div className="content-wrapper">
          <div className="notfound-logo-container">
            <div className="notfound-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="notfound-container">
            <div className="notfound-message">
              <div className="notfound-title">Oops! Page not found</div>
              <div className="notfound-subtitle">
                The page you're looking for doesn't exist.
              </div>
              <div className="notfound-description">
                The page might have been removed or the link might be broken.
              </div>
              <div className="notfound-link-container">
                <Link to="/" className="notfound-link">
                  Go back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notfound;
