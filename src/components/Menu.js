import React, { useEffect } from 'react';
import styled from 'styled-components';

import MenuItems from '../menuItems';
import SubMenu from './SubMenu';

import { useGlobalContext } from '../context/context';

const Menu = () => {
  const {
    isMenuOpen,
    showMenuDesktop,
    screenWidth,
    isDesktop,
    setIsDesktop,
  } = useGlobalContext();

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      showMenuDesktop(window.innerWidth);
    });
    return () => window.removeEventListener('resize', event);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth >= 1440) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [screenWidth]);

  return (
    <Wrapper>
      <div
        className={`${
          isMenuOpen || isDesktop
            ? 'menu-container open'
            : 'menu-container closed'
        }`}
      >
        <div className="links">
          {MenuItems.map((menuItem) => {
            return (
              <SubMenu
                key={menuItem.id}
                link={menuItem.link}
                subLinks={menuItem.subItems}
              />
            );
          })}
        </div>
        <div className="btn-menu-container">
          <button className="btn btn-flat">Login</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .menu-container {
    background-color: var(--clr-white);
    width: 90vw;
    position: absolute;
    transform: translateX(-50%);
    top: 12.5rem;
    left: 50%;
    padding: 3.3rem;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: visibility 0s, opacity 0.3s linear;

    @media (min-width: 1440px) {
      display: flex;
      justify-content: space-between;
      background-color: transparent;
      box-shadow: none;
      border-radius: 0;
      position: relative;
      transform: translateX(0);
      left: unset;
      width: auto;
      top: 6.4rem;
      padding: 0 0 0 17rem;
    }
    .links {
      @media (min-width: 1440px) {
        display: flex;
      }
    }
  }
  .open {
    visibility: visible;
    opacity: 1;
  }
  .closed {
    visibility: hidden;
    opacity: 0;
  }
  .menu-item {
    font-size: 1.8rem;
    color: var(--clr-primary-dark);
    font-weight: 600;
    margin-bottom: 3.3rem;
    cursor: pointer;
    @media (min-width: 1440px) {
      color: var(--clr-white-2);
      margin-bottom: 0;
      margin-right: 11rem;
      position: relative;
    }
    svg {
      vertical-align: middle;
      color: var(--clr-red-light-2);
      margin-left: 0.5rem;
      @media (min-width: 1440px) {
        color: var(--clr-white-2);
      }
    }
    ul {
      background-color: #efeff1;
      padding: 2.5rem;
      transition: visibility 0s, opacity 0.3s linear;
      @media (min-width: 1440px) {
        border-radius: 8px;
        position: absolute;
        top: 5rem;
        left: -2rem;
        text-align: left;
        min-width: 20rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }
      li:not(:last-child) {
        margin-bottom: 2.5rem;
        @media (min-width: 1440px) {
          margin-bottom: 1.5rem;
        }
      }
      li:hover {
        font-weight: bold;
      }
      a {
        color: var(--clr-primary-dark);
        font-weight: 300;
        font-size: 1.5rem;
        @media (min-width: 1440px) {
          font-size: 1.7rem;
        }
        transition: hover 0.2s ease-in-out;
      }
      a:hover {
        font-weight: bold;
      }
    }
    .open {
      visibility: visible;
      opacity: 1;
    }
    .closed {
      visibility: collapse;
      opacity: 0;
      position: absolute;
    }
  }

  .menu-item:first-child {
    @media (min-width: 1440px) {
      margin-right: 12rem;
    }
  }

  .btn-menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #e4e4e4;
    @media (min-width: 1440px) {
      flex-direction: row;
      border: none;
      margin-top: -26px;
    }
    .btn {
      margin-top: 1.5rem;
      font-family: 'Ubuntu', sans-serif;
      @media (min-width: 1440px) {
        align-self: baseline;
      }
    }
    .btn-flat {
      @media (min-width: 1440px) {
        color: var(--clr-white);
      }
    }
    .btn.btn-signup {
      @media (min-width: 1440px) {
        background-color: var(--clr-white);
        background-image: none;
        color: var(--clr-red-light-2);
      }
    }
  }
`;

export default Menu;
