import React, { useState, useEffect, useCallback } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import FlagIcon from 'components/FlagIcon';
import { CONFIG } from 'environments/config';

export function LanguageDetector() {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.fetch(`${CONFIG.API_URL}/i18n/languages`)
      .then(res => res.json())
      .then(
        result => setLanguages(result),
        error => console.error(error)
      );
  }, [setLanguages]);

  const toggleDropdown = useCallback(() => { setIsOpen(currentIsOpen => !currentIsOpen); }, [setIsOpen]);

  const getCountryCode = useCallback(code => {
    if (code) {
      var [languageCode, countryCode] = code.toLowerCase().split('-');

      return countryCode || (languageCode === 'en' ? 'gb' : languageCode);
    }
  }, []);

  return (
    <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>
        <FlagIcon className="mr-2" code={getCountryCode(i18n.language)} />
        {i18n.language}
      </DropdownToggle>
      <DropdownMenu>
        {languages.map(language =>
          <DropdownItem key={language} onClick={() => i18n.changeLanguage(language)}>
            <FlagIcon className="mr-2" code={getCountryCode(language)} />
            {language}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}