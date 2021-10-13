import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bd-masthead mb-3" id="content">
        <div className="container px-4 px-md-3">
          <div className="row align-items-lg-center">
            <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M441.4 140.2v338.8c0 18.2-14.8 33-33 33H103.6c-18.2 0-33-14.8-33-33V33C70.6 14.8 85.4 0 103.6 0h197.6L441.4 140.2z" fill="#28B446" />
                <polygon points="320.3 137.2 441.4 187.1 441.4 140.2 372.8 120 " fill="#219B38" />
                <path d="M441.4 140.2H334.2c-18.2 0-33-14.8-33-33V0L441.4 140.2z" fill="#6ACE7C" />
                <path d="M337.1 254.9H174.9c-5.8 0-10.5 4.7-10.5 10.5v141.2c0 5.8 4.7 10.5 10.5 10.5h162.2c5.8 0 10.5-4.7 10.5-10.5V265.5C347.7 259.7 342.9 254.9 337.1 254.9zM185.4 322.7h60v26.8h-60V322.7zM266.5 322.7h60v26.8h-60V322.7zM326.6 301.6h-60v-25.6h60L326.6 301.6 326.6 301.6zM245.5 276v25.6h-60v-25.6H245.5zM185.4 370.5h60v25.6h-60V370.5zM266.5 396.1v-25.6h60v25.6H266.5z" fill="#FFF" />
              </svg>
            </div>
            <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
              <h1 className="mb-3">{t('home-page:build-fast-localizable-sites')}</h1>
              <p className="lead mb-4">{t('home-page:quickly-design-localizable-sites')}</p>

              <div className="d-flex flex-column flex-md-row justify-content-center">
                <Link to="/introduction" className="btn btn-lg btn-success mb-3 mr-2">{t('global:navbar.get-started')}</Link>
                <a
                  href="https://www.nuget.org/packages/GoogleSheetI18n.Api/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg btn-outline-secondary mb-3">
                  {t('home-page:download')}
                </a>
              </div>
              <p className="text-muted mb-0">
                {t('home-page:currently')} <strong>v0.1.0</strong>
                <span className="px-1">�</span>
                <a href="/" className="text-secondary">{t('home-page:prev-releases')}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
