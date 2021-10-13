import React, { useState, useEffect } from 'react';
import { Loader } from 'components/Loader';
import { ErrorSummary } from 'components/ErrorSummary';
import { Container } from 'reactstrap';
import { NavMenu } from 'components/NavMenu';
import { useI18nSettings } from 'hooks/useI18nSettings';
import { i18nService } from 'services/i18nService';

export function Layout(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setI18nSettings } = useI18nSettings();

  useEffect(() => {
    i18nService.getSettings()
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setI18nSettings(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [setI18nSettings, setIsLoaded, setError]);

  return (
    <div>
      {error && <ErrorSummary message={error.message} />}
      {!error && !isLoaded && <Loader />}
      {!error && isLoaded && (
        <div>
          <NavMenu />
          <Container>
            {props.children}
          </Container>
        </div>
      )}
    </div>
  );
}
