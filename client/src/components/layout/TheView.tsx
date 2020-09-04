import React from 'react';
// import { FlexChild } from './Flex';
// import styled from 'styled-components';

// todo move to ./types
type WithChildren<T = unknown> = T & { children?: React.ReactNode };
type ContentProps = WithChildren;

export const TheView = ({ children }: ContentProps) => (
  <main
    style={{
      flex: '1',

      // overflow: 'auto',
      textAlign: 'justify',

      padding: '0px 30px 0px 30px',
    }}
  >
    {children}
  </main>
);
