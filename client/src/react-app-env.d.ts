/// <reference types="react-scripts" />

import React from 'react';
import { RouteProps, RouteComponentProps } from 'react-router-dom';

// =============================================================================
// Routing
// =============================================================================
declare global {
  interface MyRouteProps extends RouteProps {
    // Override next properties to ensure they are passed.
    // eslint-disable-next-line max-len, @typescript-eslint/no-explicit-any
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    path: string;
    exact: boolean;

    // custom properties
    breadcrumb: string;
    isProtected: boolean;
  }

  // =============================================================================
  // Style
  // =============================================================================
  interface MyThemeProps {
    media: {
      screenBP: string;
    };

    colors: {
      background: string;
      font: string;
      link: string;
    };

    header: {
      height: string;
    };

    content: {
      width: string;
    };

    fonts: {
      family: string;
      size: string;
    };
  }
  // =============================================================================
  //
  // ============================================================================
  interface MyLinkProps {
    link: string;
    label: string;
    icon: React.ReactNode;
  }
}
