import React from 'react'; // { lazy }
import { createGlobalStyle } from 'styled-components';
import { FaLinkedin, FaEnvelope, FaGithub, FaDev } from 'react-icons/fa';

// import my types, views and main app
import GillSansRegular from './assets/fonts/SFUGillSansRegular.woff';
import { About, Projects, Notes, Memorial } from './components/views';

// used to extends custom theme in order to use
// `createGlobalStyle` function
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyThemeProps {}
}

export const myRoutes: MyRouteProps[] = [
  {
    path: '/',
    component: About, //lazy(() => import('./components/views/about/About')),
    exact: true,
    breadcrumb: 'À propos',
    isProtected: false,
  },
  {
    path: '/projects',
    component: Projects,
    exact: false,
    breadcrumb: 'Projets',
    isProtected: false,
  },
  {
    path: '/notes',
    component: Notes,
    exact: true,
    breadcrumb: 'Notes',
    isProtected: true,
  },
  {
    path: '/memorial',
    component: Memorial,
    exact: true,
    breadcrumb: 'Mémorial',
    isProtected: false,
  },
];

export const myLinks: MyLinkProps[] = [
  {
    link: 'mailto:contact@hippolyte-debernardi.com',
    label: 'Email',
    icon: (
      <span>
        <FaEnvelope />
      </span>
    ),
  },
  {
    link: 'https://www.linkedin.com/in/hippolyte-debernardi/',
    label: 'LinkedIn',
    icon: (
      <span>
        <FaLinkedin />
      </span>
    ),
  },

  {
    link: 'https://github.com/mlisthenewcool',
    label: 'GitHub',
    icon: (
      <span>
        <FaGithub />
      </span>
    ),
  },

  {
    link: 'https://www.malt.fr/profile/hippolyteldebernardi',
    label: 'Malt',
    icon: (
      <span>
        <FaDev />
      </span>
    ),
  },
];

export const myTheme: MyThemeProps = {
  content: {
    width: '1200px',
  },

  header: {
    height: '80px',
  },

  colors: {
    background: '#FFFFFF',
    font: '#000000',
    link: '#8b0000',
  },

  fonts: {
    family: 'GillSansRegular',
    size: '20px',
  },

  media: {
    screenBP: '768px',
  },
};

export const GlobalStyle = createGlobalStyle`
  /**
   * ===========================================================================
   * Global (html/body) settings.
   * ===========================================================================
   */
  html, body { height: 100%; }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.family};
    color: ${(props) => props.theme.colors.font};
    font-size: ${(props) => props.theme.fonts.size};
    
    margin: 0;                 /* no outside margin for our boxes */
    overflow-wrap: break-word; /* force every child content to fit max-width */
  }
  
  @font-face {
    font-family: 'GillSansRegular';
    src: url(${GillSansRegular}) format('woff');
  }
  
  /**
   * ===========================================================================
   * Main div (root of the React app) settings.
   * ===========================================================================
   */
  
  #root {
    max-width: ${(props) => props.theme.content.width};
    height: 100%;
    margin: auto;
    /* text-align: justify; */
  }

  /**
   * ===========================================================================
   * Settings available everywhere for various purposes.
   * ===========================================================================
   */
   
  a {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;

    :hover {
      /* text-decoration: line-through; */
    }
  }
  
  .react-icons {
    height: 30px;
    width: 30px;
  }
`;
