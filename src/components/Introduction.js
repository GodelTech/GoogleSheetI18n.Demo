import React from 'react';
import { useTranslation } from 'react-i18next';
import { useI18nSettings } from 'hooks/useI18nSettings';

export function Introduction() {
  const { t } = useTranslation();
  const i18nSettings = useI18nSettings();
  const linkToGoogleSheet = `https://docs.google.com/spreadsheets/d/${i18nSettings.spreadsheetId}`;

  return (
    <div>
      <h1>{t('intro-page:getting-started')}</h1>
      <p>{t('intro-page:many-projects-add-support')}</p>
      <p>{t('intro-page:as-software-engineers')}</p>
      <p>{t('intro-page:this-poc-uses-sheet')} <a href={linkToGoogleSheet}>{t('intro-page:translations-poc')}</a>.</p>
      <p>{t('intro-page:each-tab-represents')}</p>
      <table>
        <thead>
          <tr>
            <th>{t('intro-page:id')}</th>
            <th>{t('intro-page:language-tag')}</th>
            <th>{t('intro-page:other-language-tag')}</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('intro-page:some.id')}</td>
            <td>{t('intro-page:some-translation')}</td>
            <td>{t('intro-page:some-other-translation')}</td>
            <td>... </td>
          </tr>
          <tr>
            <td>{t('intro-page:another.id')}</td>
            <td>{t('intro-page:another-translation')}</td>
            <td>{t('intro-page:another-translation')}</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
      <p>{t('intro-page:for-example')}:</p>
      <table>
        <thead>
          <tr>
            <th>{t('intro-page:id')}</th>
            <th>{t('intro-page:en-us')}</th>
            <th>{t('intro-page:en-gb')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('intro-page:color.gray')}</td>
            <td>{t('intro-page:color-gray')}</td>
            <td>{t('intro-page:colour-grey')}</td>
          </tr>
          <tr>
            <td>{t('intro-page:word.flavor')}</td>
            <td>{t('intro-page:flavor')}</td>
            <td>{t('intro-page:flavour')}</td>
          </tr>
          <tr>
            <td>{t('intro-page:word.analyze')}</td>
            <td>{t('intro-page:analyze')}</td>
            <td>{t('intro-page:analyse')}</td>
          </tr>
        </tbody>
      </table>
      <h2 id="prereqisites">{t('intro-page:prereqisites')}</h2>
      <ul>
        <li><a href="https://dotnet.microsoft.com/download/dotnet/5.0">{t('intro-page:dotnet-5-sdk')}</a> {t('intro-page:to-build-the-app')}</li>
        <li><a href="https://console.developers.google.com">{t('intro-page:google-dev-account')}</a> </li>
        <li>
          <a href="https://console.developers.google.com">{t('intro-page:google-dev-account')}</a> ({t('intro-page:with-the-api-access')}:&nbsp;
          <a href="https://console.developers.google.com/apis/library/sheets.googleapis.com?id=739c20c5-5641-41e8-a938-e55ddc082ad1">Google Sheets API</a>,
          <a href="https://console.developers.google.com/apis/library/drive.googleapis.com?id=e44a1596-da14-427c-9b36-5eb6acce3775">Google Drive API</a>)&nbsp;
          {t('intro-page:to-run-against')}
        </li>
      </ul>
      <h2 id="build-the-app">{t('intro-page:build-the-app')}</h2>
      <p>{t('intro-page:there-is-no-specia-deps')}</p>
      <h2 id="run-the-app">{t('intro-page:run-the-app')}</h2>
      <p>{t('intro-page:things-you-should-know')}</p>
      <p>{t('intro-page:we-expect-valid-google-sheet-id')} <code>SPREADSHEET_ID</code> {t('intro-page:env-variable')}.</p>
      <p>{t('intro-page:we-use')} <a href="https://cloud.google.com/docs/authentication/production">{t('intro-page:google-cloud-credentials')}</a> {t('intro-page:for-accessing-google-sheets')}:</p>
      <ul>
        <li>{t('intro-page:via-setting-creds')} <code>GOOGLE_APPLICATION_CREDENTIALS_AS_JSON</code> {t('intro-page:env-variable')};</li>
        <li>{t('intro-page:via-setting-path-to-file')} <code>GOOGLE_APPLICATION_CREDENTIALS</code> {t('intro-page:env-variable')};</li>
        <li>{t('intro-page:via-setting-path-to-file')} <code>CredentialsFilePath</code> {t('intro-page:variable-in')} <code>appsettings.json</code>.</li>
      </ul>
      <p>{t('intro-page:use-local-system')} <code>BACKUP_FOLDER_PATH</code> {t('intro-page:env-variable')}.</p>
      <p>{t('intro-page:we-can-purge-cache')}: <code>SUBSCRIPTION_URL</code> - {t('intro-page:absolute-url-to-purge-cache')}.</p>
      <p>{t('intro-page:check-more-in')} <code>GoogleSheetI18n.Api.SimpleWebApi\Properties\launchSettings.json</code>.</p>
      <h2 id="startup">{t('intro-page:startup')}</h2>
      <p>{t('intro-page:only-aspnet-project')}: <code>GoogleSheetI18n.Api.SimpleWebApi</code>.</p>
      <h2 id="interested-or-want-to-contribute-">{t('intro-page:want-to-contribute')}</h2>
      <p>{t('intro-page:feel-free-to-contact')}:</p>
      <ul>
        <li>Dzmitry Shubkin</li>
        <li>Aliaksandr Khlebus</li>
      </ul>
    </div>
  );
}
