import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import useBreadcrumbs, { BreadcrumbData } from 'use-react-router-breadcrumbs';

import { TheHeader, TheView } from './components/layout';
// import { FlexChild, FlexContainer } from './components/layout/Flex';

// todo move to types
interface MyMainProps {
  routes: MyRouteProps[];
  links: MyLinkProps[];
}

// =============================================================================
// TODO : move
const isAuthenticated = () => false;

const LoginButton = () => (
  <button type='button' onClick={(): boolean => false}>
    Get JWT
  </button>
);

/**
 * Component in charge to render the route asked by client.
 *
 * @param component
 * @param path
 * @param exact
 * @param isProtected
 * @param isAuthenticated
 * @constructor
 */
const TheRouteRenderer = ({ component, path, exact, isProtected }: MyRouteProps) => {
  if (isProtected) {
    return isAuthenticated() ? (
      <Route exact={exact} component={component} path={path} />
    ) : (
      <Route component={LoginButton} render={undefined} />
    );
  }

  return <Route exact={exact} component={component} path={path} />;
};
// =============================================================================

/*
const StyledView = styled(FlexContainer)`
  padding: 20px;
`;
*/

interface MyBreadcrumbProps {
  routes: MyRouteProps[]
}

const TheStyledBreadcrumbs = styled.header`
  a + a::before {
    content: "\\02192";
  }
`;

const TheBreadcrumbs = ({ routes }: MyBreadcrumbProps) => {
  const breadcrumbs = useBreadcrumbs(routes, {
    disableDefaults: true,
    // excludePaths: ['/']
  });

  return (
    <TheStyledBreadcrumbs style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      textAlign: 'center',
      minHeight: '40px',
      maxHeight: '40px'
    }}>
      {breadcrumbs.map(({ match, breadcrumb }: BreadcrumbData) => (
        <Link key={match.url} to={match.url}>
          &nbsp;&nbsp;{breadcrumb}&nbsp;&nbsp;
        </Link>
      ))}
    </TheStyledBreadcrumbs>
  )
}

// https://jsfiddle.net/ycsmo8fx/30/

export const Main = ({ routes, links }: MyMainProps) => (
  <>
    {/* Set browser router at app's root to use links wherever you want */}
    <BrowserRouter>
      <TheHeader routes={routes} links={links} />
      {/* <TheMenu routes={routes}/> */}

      {/* Rendering matched routes */}
      <main style={{
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',

        height: 'calc(100vh - 80px)',
      }}>
        <TheBreadcrumbs routes={routes} />
        <TheView>
          <Switch>
            {routes.map((route: MyRouteProps) => (
              // todo care about giving breadcrumb as key
              <TheRouteRenderer
                key={route.breadcrumb}
                component={route.component}
                path={route.path}
                exact={route.exact}
                breadcrumb={route.breadcrumb}
                isProtected={route.isProtected}
              />
            ))}
            <Route render={() => <>not found</>} path='*' />
          </Switch>
        </TheView>
      </main>
    </BrowserRouter>
  </>
);
