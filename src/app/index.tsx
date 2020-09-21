/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { GenerateQr } from './containers/GenerateQr/Loadable';
import { ScanQr } from './containers/ScanQr/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import OverrideRoutes from './routes/';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <OverrideRoutes exact={true} path="/" component={HomePage} />
        <OverrideRoutes
          exact
          path="/qr/generate"
          component={GenerateQr}
          isAppBar
        />
        <OverrideRoutes
          isAppBar
          exact={true}
          path="/qr/scan"
          component={ScanQr}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
