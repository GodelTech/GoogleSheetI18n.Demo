import { spreadsheetTypes } from 'enums/SpreadsheetType';
import { CONFIG } from 'environments/config';

export const i18nService = {
    getSettings: function () {
        return window.fetch(`${CONFIG.API_URL}/i18n/settings`);
    },
    reloadLocalStore: function (token) {
        return window.fetch(`${CONFIG.API_URL}/i18n/reload-local-store`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: {}
            });
    },
    validateSpreadsheet: function (type) {
        return type === spreadsheetTypes.LOCAL ? window.fetch(`${CONFIG.API_URL}/i18n/validate-local-spreadsheet`) : window.fetch(`${CONFIG.API_URL}/i18n/validate-spreadsheet`);
    }
}
