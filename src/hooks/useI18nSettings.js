import React, { useState, useContext } from 'react';

const initialState = {};

const I18nSettingsContext = React.createContext();
const { Provider } = I18nSettingsContext;

export const useI18nSettings = () => useContext(I18nSettingsContext);

export default function I18nSettingsProvider({ children }) {
  const [state, setState] = useState(initialState);
  const value = {
    i18nSettings: state,
    setI18nSettings: setState
  };

  return <Provider value={value}>{children}</Provider>;
}

