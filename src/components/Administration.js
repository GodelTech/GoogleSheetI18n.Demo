import React, { useCallback, useState } from 'react';
import { Loader } from 'components/Loader';
import { ErrorSummary } from 'components/ErrorSummary';
import { useTranslation } from 'react-i18next';
import { useI18nSettings } from 'hooks/useI18nSettings';
import { useAuth } from 'hooks/useAuth';
import { i18nService } from 'services/i18nService';
import { spreadsheetTypes } from 'enums/SpreadsheetType'

export function Administration() {
    const { t } = useTranslation();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const { i18nSettings } = useI18nSettings();
    const { authState } = useAuth();
    const linkToGoogleSheet = `https://docs.google.com/spreadsheets/d/${i18nSettings.spreadsheetId}`;

    const clearCache = useCallback(() => {
        i18nService.reloadLocalStore(
            authState.token
        ).then(
            (result) => {
                if (result.status !== 200) {
                    setIsLoaded(true);
                    alert(`Error when clearing cache. HTTP status: ${result.status}`);
                    return;
                }
                window.location.reload();
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
        setIsLoaded(false);
    }, [authState, setIsLoaded, setError]);

    const validateSpreadsheet = useCallback(type => {
        i18nService.validateSpreadsheet(type)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.message === "") {
                        alert(`Validation was successful`);
                        return;
                    }   
                    setError(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
        );
        setIsLoaded(false);
    }, [setIsLoaded, setError]);

    if (error) {
        return <ErrorSummary message={error.message} />;
    }

    return (
        <div>
            <h1>{t('admin-page:administration')}</h1>
            <h3>{t('admin-page:basic-actions')}</h3>
            {isLoaded && <div>
                <a href={linkToGoogleSheet} target="_blank" rel="noreferrer" className="btn btn-lg btn-success mb-3 mr-2">{t('admin-page:view-google-sheet')}</a>
                {authState.isAuthenticated && <button onClick={clearCache} className="btn btn-lg btn-outline-secondary mb-3">
                    {t('admin-page:reload-local-store')} </button>}
                {authState.isAuthenticated && <button onClick={() => validateSpreadsheet(spreadsheetTypes.LOCAL)} className="btn btn-lg btn-outline-secondary mb-3 ml-2">
                    {t('admin-page:validate-local-store')} </button>}
                <button onClick={() => validateSpreadsheet(spreadsheetTypes.NOTLOCAL)} className="btn btn-lg btn-outline-secondary mb-3 ml-2">
                    {t('admin-page:validate')} </button>
            </div>}
            {!isLoaded && <Loader />}
        </div>
    );
}