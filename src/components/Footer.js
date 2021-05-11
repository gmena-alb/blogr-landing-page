import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import menuItems from '../menuItems';

const Footer = () => {
  return (
    <Wrapper>
      <img className="logo" src={logo} alt="blogr" />
      {menuItems.map((menuItem) => {
        const { id, link, subItems } = menuItem;
        return (
          <div key={id} className="link-container">
            <h4>{link}</h4>
            {subItems.map((subItem) => {
              const { id, subLink } = subItem;
              return (
                <a key={id} href="#">
                  {subLink}
                </a>
              );
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  background-color: var(--clr-blue-dark-1);
  border-radius: 0 10rem 0 0;
  @media (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 6.5rem 3rem 0;
  }
  .logo {
    margin: 7.5rem 0 9rem;
    @media (min-width: 1440px) {
      margin: 0;
    }
  }
  .link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.7rem;
    color: var(--clr-white);
    @media (min-width: 1440px) {
      align-items: flex-start;
    }
    h4 {
      margin-bottom: 4.1rem;
      @media (min-width: 1440px) {
        margin-bottom: 3.1rem;
      }
    }
    a {
      color: var(--clr-grey);
      font-size: 1.5rem;
      line-height: 1.5;
      transition: all 0.5s ease-in-out;
    }
    a:not(:last-child) {
      margin-bottom: 2.1rem;
      @media (min-width: 1440px) {
        margin-bottom: 1.2rem;
      }
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .link-container:not(:last-child) {
    margin-bottom: 5.7rem;
  }
  .link-container:last-child {
    padding-bottom: 8.4rem;
  }
`;

export default Footer;
