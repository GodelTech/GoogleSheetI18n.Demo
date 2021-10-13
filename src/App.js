import React, { Suspense } from 'react';
import { Route } from 'react-router';
import { Layout } from 'components/Layout';
import { Home } from 'components/Home';
import { Introduction } from 'components/Introduction';
import { Administration } from 'components/Administration';
import I18nSettingsProvider from 'hooks/useI18nSettings';
import AuthProvider from 'hooks/useAuth';

import 'custom.css';

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <I18nSettingsProvider>
        <AuthProvider>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/introduction' component={Introduction} />
            <Route path='/administration' component={Administration} />
          </Layout>
        </AuthProvider>
      </I18nSettingsProvider>
    </Suspense>
  );
}
