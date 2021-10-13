import React from 'react';
import { useTranslation } from 'react-i18next';

export function Loader() {
  const { t } = useTranslation();

  return <span>{t('global:loading')}</span>;
}
