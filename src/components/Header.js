import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import logo from '../images/logo.svg';
import bg from '../images/bg-pattern-intro.svg';
import { FiMenu, FiX } from 'react-icons/fi';
import { useGlobalContext } from '../context/context';

const Header = () => {
  const { toggleMenu, isMenuOpen } = useGlobalContext();

  return (
    <Wrapper>
      <Menu />
      <div className="container">
        <img className="logo" src={logo} alt="blogr" />
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="btn-container">
          <button className="btn btn-white">Start for Free</button>
          <button className="btn btn-transparent">Learn More</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-image: linear-gradient(
    to bottom right,
    var(--clr-red-light-1),
    var(--clr-red-light-2)
  );
  position: relative;
  border-radius: 0 0 0 10rem;
  .container {
    background-image: url(${bg});
    background-position: 36% 35%;
    background-size: 374%;
    padding: 0 4.2rem;
    border-radius: 0 0 0 10rem;
  }
  .logo {
    position: absolute;
    top: 5.6rem;
    left: 3.7rem;
  }
  .menu-toggle {
    color: white;
    font-size: 4rem;
    position: absolute;
    right: 3.7rem;
    top: 5.1rem;
  }
  h1 {
    padding-top: 206px;
  }
  p {
    font-family: 'Overpass', sans-serif;
    color: var(--clr-white);
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 154px;
  }
`;

export default Header;
