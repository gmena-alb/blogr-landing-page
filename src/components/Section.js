import React from 'react';
import styled from 'styled-components';
import bgMobile1 from '../images/illustration-editor-mobile.svg';
import bgMobile2 from '../images/illustration-laptop-mobile.svg';
import bgDesktop1 from '../images/illustration-editor-desktop.svg';
import bgDesktop2 from '../images/illustration-laptop-desktop.svg';

const Section = ({ sectionContent, title, section }) => {
  return (
    <Wrapper>
      <div className={`section-container section-container-${section}`}>
        {title && <h2 className="section-title">{title}</h2>}
        <div className={`img-container img-container-${section}`}>
          <img alt="laptop illustration"></img>
        </div>
        <div className="articles">
          {sectionContent.map((content, index) => {
            return (
              <article key={index}>
                <h3 className="article-title">{content.title}</h3>
                <p>{content.content}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-container {
    margin-top: 6.7rem;
    padding: 0 2.4rem;
    position: relative;
    overflow: hidden;
    min-height: 86rem;
    @media (min-width: 1440px) {
      margin-top: 6rem;
      padding: 10rem 16.5rem 2rem;
      display: flex;
    }
    .section-title {
      @media (min-width: 1440px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .img-container {
      display: flex;
      justify-content: center;
      overflow: hidden;
      @media (min-width: 1440px) {
        flex: 0 0 50%;
        position: absolute;
      }
      img {
        margin: 5.4rem 0;
        max-width: 37.5rem;
        @media (min-width: 1440px) {
          margin: 0;
        }
      }
    }
    .articles {
      @media (min-width: 1440px) {
        flex: 0 0 50%;
      }
      .article-title {
        padding: 0 6.4rem;
        line-height: 1.3;
        @media (min-width: 1440px) {
          font-size: 2.4rem;
          text-align: left;
          padding: 0;
        }
      }
      p {
        padding: 2.1rem 0.7rem 5rem;
        @media (min-width: 1440px) {
          font-size: 1.7rem;
          color: var(--clr-grey-dark-1);
          text-align: left;
          margin-top: 0;
          padding: 35px 0;
        }
      }
    }
    article:first-of-type {
      @media (min-width: 1440px) {
        margin-top: 12rem;
        margin-bottom: 5rem;
      }
    }
  }

  .section-container-section-1 {
    @media (min-width: 1440px) {
      padding: 10rem 0rem 2rem 16.5rem;
      justify-content: flex-start;
    }
    .img-container {
      @media (min-width: 1440px) {
        order: 1;
        position: relative;
      }
      img {
        content: url(${bgMobile1});
        @media (min-width: 1440px) {
          content: url(${bgDesktop1});
          max-width: 77rem;
          position: absolute;
          margin-right: -264px;
          margin-top: 0px;
        }
      }
    }

    .articles {
      @media (min-width: 1440px) {
        padding-right: 10rem;
      }
    }
  }

  .section-container-section-2 {
    @media (min-width: 1440px) {
      padding: 10rem 19.5rem 2rem 0;
      justify-content: space-between;
    }
    .img-container {
      @media (min-width: 1440px) {
        order: -1;
        position: relative;
      }
      img {
        content: url(${bgMobile2});
        @media (min-width: 1440px) {
          content: url(${bgDesktop2});
          max-width: 90rem;
          position: absolute;
          margin-top: 0px;
          margin-left: -225px;
        }
      }
    }
    .articles {
      padding-left: 4rem;
      padding-right: 2rem;
    }
  }
`;

export default Section;
