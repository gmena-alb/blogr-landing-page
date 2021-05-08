import React, { useState } from 'react';
import styled from 'styled-components';

import MenuItems from '../menuItems';
import SubMenu from './SubMenu';

import { useGlobalContext } from '../context/context';

const Menu = () => {
  const { isMenuOpen } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={`${
          isMenuOpen ? 'menu-container open' : 'menu-container closed'
        }`}
      >
        {MenuItems.map((menuItem) => {
          return <SubMenu link={menuItem.link} subLinks={menuItem.subItems} />;
        })}
        <div className="btn-container">
          <button className="btn btn-flat">Login</button>
          <button className="btn btn-gradient">Sign Up</button>
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
    svg {
      vertical-align: middle;
      color: var(--clr-red-light-2);
      margin-left: 0.5rem;
    }
    ul {
      background-color: #efeff1;
      padding: 2.5rem;
      transition: visibility 0s, opacity 0.3s linear;

      li:not(:last-child) {
        margin-bottom: 2.5rem;
      }
      a {
        color: var(--clr-primary-dark);
        font-weight: 300;
        font-size: 1.5rem;
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
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #e4e4e4;
    .btn {
      margin-top: 1.5rem;
      font-family: 'Ubuntu', sans-serif;
    }
  }
`;

export default Menu;
