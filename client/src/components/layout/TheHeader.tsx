// visit doc at https://github.com/icd2k3/use-react-router-breadcrumbs
import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
// import useBreadcrumbs from 'use-react-router-breadcrumbs';

// import { FlexContainer, FlexChild } from './Flex';
// import { TheMenu } from './TheMenu';
// import styled from 'styled-components';

interface MyHeaderProps {
  routes: MyRouteProps[];
  links: MyLinkProps[];
}

/*
const StyledHeader = styled(FlexContainer)`
  border-bottom: solid 3px black;
  height: 80px;

  text-align: center;
`;
*/
/*
const StyledBreadcrumb = styled(FlexChild)`
  a + a::before {
    content: '\\02192';
  }
`;
*/
/*
const EnlargeOnSmallScreen = styled(FlexChild)`
  flex: 3;
  
  @media all and (max-width: 768px) {
    flex: 5;
  }
`;

const DisplayOnLargeScreen = styled.div`
  display: flex;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const DisplayOnSmallScreen = styled.div`
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
`;
*/

const headerChildStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const TheHeader = ({ routes, links }: MyHeaderProps) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'stretch',

      height: '80px',
      backgroundColor: 'yellow',
      textAlign: 'center',

      boxSizing: 'border-box',
      borderBottom: '3px solid black',
    }}>
      <nav style={{
        ...headerChildStyle,
        flex: 3,
      }}>
        <Link to='/'>Hippolyte Debernardi</Link>
      </nav>

      <nav style={{
        ...headerChildStyle,
        flex: 5,
      }}>
        {routes.map((route: MyRouteProps) => (
          <Link style={{padding: '0 10px 0 10px'}} key={route.path} to={route.path}>
            {route.breadcrumb}
          </Link>
        ))}
      </nav>

      <nav style={{
        ...headerChildStyle,
        flex: 2,
      }}>
        <IconContext.Provider value={{className: 'react-icons'}}>
          {links.map((link: MyLinkProps) => (
            <a style={{
              padding: '5px 5px 0 5px',
            }}
               key={link.label}
               href={link.link}
               rel='noopener noreferrer'
               target='_blank'
            >
              {link.icon || link.label}
            </a>
          ))}
        </IconContext.Provider>
      </nav>

      {/*
      <div style={{
        ...headerChildStyle,
        flex: 2,
      }}>
        <TheMenu routes={routes} />
      </div>*/}
    </header>
  );
};
