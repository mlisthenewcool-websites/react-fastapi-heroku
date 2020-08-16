import React, { useState, useRef, useEffect, RefObject } from 'react';
import { NavLink } from 'react-router-dom';

// styles & other components
import styled from 'styled-components';

/**
 * =============================================================================
 * STYLES
 * =============================================================================
 */
const colors = {
  background: '#FFFFFF',
  font: '#000000',
  link: '#8b0000',
};

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${colors.background};

  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translate(0, 0)' : 'translate(100%, -100%)')};

  a {
    font-size: 30px;
    text-align: center;
    padding-top: 10px;
  }
`;

const StyledHamburger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;
  width: 2rem;
  height: 2rem;
  background: transparent;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  span {
    width: ${({ open }) => (open ? '2rem' : '2rem')};
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) => (open ? colors.link : colors.font)};

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

/**
 * =============================================================================
 * COMPONENTS
 * =============================================================================
 */

// HAMBURGER

type HamburgerProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const TheHamburger = (props: HamburgerProps) => (
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <span />
    <span />
    <span />
  </StyledHamburger>
);

// MENU

const useOnClickOutside = (ref: RefObject<HTMLDivElement>, closeMenu: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, closeMenu]);
};

interface MyMenuProps {
  routes: MyRouteProps[];
}

export const TheMenu = ({ routes }: MyMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu ref={node} open={open}>
        {routes.map((route: MyRouteProps) => (
          // todo care about giving breadcrumb as key
          <NavLink key={route.breadcrumb} to={route.path} onClick={() => setOpen(false)}>
            {route.breadcrumb}
          </NavLink>
        ))}
      </StyledMenu>
      <TheHamburger open={open} setOpen={setOpen} />
    </div>
  );
};
