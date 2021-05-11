import React from 'react';
import styled from 'styled-components';
import bgCircles from '../images/bg-pattern-circles.svg';
import phones from '../images/illustration-phones.svg';

const Banner = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={phones} alt="phones" />
      </div>
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
  margin-top: 10rem;
  background-color: var(--clr-blue-dark-1);
  border-radius: 0 10rem 0 10rem;
  background-image: url(/static/media/bg-pattern-circles.bae804b8.svg);
  background-size: 167%;
  background-position: center -255px;
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    background-color: var(--clr-blue-dark-2);
    background-size: 86%;
    background-position: -278px -608px;
    display: flex;
    padding: 0 14.3rem;
    align-items: center;
    margin-top: 7rem;
  }

  .img-container {
    display: flex;
    justify-content: center;
    margin-bottom: -24.2rem;
    @media (min-width: 1440px) {
      margin-bottom: 0;
      position: relative;
      width: 39%;
    }
    img {
      max-width: 37.5rem;
      overflow: hidden;
      @media (min-width: 1440px) {
        position: absolute;
        max-width: 157%;
        top: -252px;
      }
    }
  }
  article {
    padding: 23rem 2.4rem 12.1rem;
    @media (min-width: 1440px) {
      padding: 12.2rem 6rem 11rem;
      margin-left: 8.3rem;
    }
    h1 {
      @media (min-width: 1440px) {
        text-align: left;
        font-size: 3.8rem;
      }
    }
    p {
      color: var(--clr-grey);
      text-align: left;
      @media (min-width: 1440px) {
        margin-bottom: 0;
      }
    }
  }
`;

export default Banner;
