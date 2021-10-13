import React from 'react';
import { useTranslation } from 'react-i18next';

export function ErrorSummary({ message }) {
  const { t } = useTranslation();

  return <span>{t('global:error')}: {message}</span>;
}
