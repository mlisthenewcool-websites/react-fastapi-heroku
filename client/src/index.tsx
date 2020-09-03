import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

// offline support, all data, global component
import * as serviceWorker from './utils/serviceWorker';
import { myTheme, GlobalStyle, myRoutes, myLinks } from './data';
import { Main } from './main';

ReactDOM.render(
  <React.StrictMode>
    {/* https://reactjs.org/docs/strict-mode.html */}
    {/* Provide a custom theme to all rendered elements */}
    <ThemeProvider theme={myTheme}>
      {/* Provide style for html and body elements */}
      <GlobalStyle />

      {/* Provide metas */}
      <HelmetProvider>
        <Helmet
          titleTemplate='%s | Hippolyte L. DEBERNARDI'
          defaultTitle='Hippolyte L. DEBERNARDI'
        />
      </HelmetProvider>

      {/* Basically all the things visible for client */}
      <Main routes={myRoutes} links={myLinks} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister();
