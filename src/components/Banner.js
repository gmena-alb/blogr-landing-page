import React from 'react';
import styled from 'styled-components';
import bgCircles from '../images/bg-pattern-circles.svg';
import phones from '../images/illustration-phones.svg';

const Banner = () => {
  return (
    <Wrapper>
      <img src={phones} alt="phones" />
      <article>
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity.
          <br />
          This ensures your site will load instantly, no matter where your
          readers are, keeping your site competitive.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  margin-top: 26.2rem;

  img {
    width: 100%;
    margin-bottom: -260px;
  }
  article {
    background-color: var(--clr-blue-dark-1);
    border-radius: 0 10rem 0 10rem;
    background-image: url(${bgCircles});
    background-size: 167%;
    background-position: center -255px;
    padding-top: 23rem;
    background-repeat: no-repeat;
    padding: 23rem 2.4rem 12.1rem;
    p {
      color: var(--clr-grey);
    }
  }
`;

export default Banner;
