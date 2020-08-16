// https://medium.com/@jamiedixon/styled-components-production-patterns-c22e24b1d896
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import React from 'react';

interface FlexProps {
  html?: 'div' | 'main' | 'header' | 'nav';
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: object;
}

interface FlexContainerProps extends FlexProps {
  // defines a flex container
  display?: 'flex' | 'block';
  // main-axis direction
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  // try to fit onto one line or wrap
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  // shorthand for flex-direction and flex-wrap
  // --- flexFlow?: 'row nowrap' | ...
  // defines the alignment along the main axis
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  // defines the alignment along the cross axis
  alignItems?:
    | 'stretch'
    | 'start' // | 'flex-start' | 'self-start'
    | 'end' // | 'flex-end' | 'self-end'
    | 'center'
    | 'baseline'; // | 'first baseline' | 'last baseline';
  //
  alignContent?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'stretch' | 'center' | 'start' | 'end';
}

interface FlexChildProps extends FlexProps {
  // controls the order in which flex items appear in the flex container
  order?: number;
  // defines the ability for a flex item to grow if necessary
  flexGrow?: number;
  // defines the ability for a flex item to shrink if necessary
  flexShrink?: number;
  // defines the default size of an element before the remaining space is distributed
  flexBasis?: number;
  // RECOMMENDED shorthand for flex-grow, flex-shrink, flex-basis
  flex?: string;
  // allows the default alignment (or the one specified by align-items) to be overridden
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

const FlexContainerElement = (props: FlexContainerProps) => {
  // hack to remove props.html from the props passed to child
  const newProps = { ...props };
  delete newProps.html;

  switch (props.html) {
    case 'header':
      return <header {...newProps}>{props.children}</header>;
    case 'main':
      return <main {...newProps}>{props.children}</main>;
    case 'div':
    default:
      return <div {...newProps}>{props.children}</div>;
  }
};

const FlexChildElement = (props: FlexChildProps) => {
  // hack to remove props.html from the props passed to child
  const newProps = { ...props };
  delete newProps.html;

  switch (props.html) {
    case 'header':
      return <header {...newProps}>{props.children}</header>;
    case 'main':
      return <main {...newProps}>{props.children}</main>;
    case 'div':
    default:
      return <div {...newProps}>{props.children}</div>;
  }
};

export const FlexContainer = (props: FlexContainerProps) => (
  <FlexContainerElement
    html={props.html}
    className={props.className}
    style={{
      display: props.display, // 'block',
      flexDirection: props.flexDirection, // 'row',
      justifyContent: props.justifyContent, // 'center',
      flexWrap: props.flexWrap, // 'nowrap',
      alignItems: props.alignItems, // 'center',
      alignContent: props.alignContent, // 'stretch',
      alignSelf: props.alignSelf, // 'stretch',
    }}
  >
    {props.children}
  </FlexContainerElement>
);

export const FlexChild = (props: FlexChildProps) => (
  <FlexChildElement
    html={props.html}
    className={props.className}
    style={{
      flexGrow: props.flexGrow, // 0,
      flexShrink: props.flexShrink, // 1,
      flexBasis: props.flexBasis, // 'auto',
      flex: props.flex, // '0 1 auto',
      alignSelf: props.alignSelf, // 'stretch',
    }}
  >
    {props.children}
  </FlexChildElement>
);
