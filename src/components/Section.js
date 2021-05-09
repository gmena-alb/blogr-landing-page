import React from 'react';
import styled from 'styled-components';
import bgMobile1 from '../images/illustration-editor-mobile.svg';
import bgMobile2 from '../images/illustration-laptop-mobile.svg';

const Section = ({ sectionContent, title, section }) => {
  return (
    <Wrapper>
      {title && <h2 className="section-title">{title}</h2>}
      <img className={`${section}`}></img>
      {sectionContent.map((content, index) => {
        return (
          <article key={index}>
            <h2 className="article-title">{content.title}</h2>
            <p>{content.content}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 10.7rem;
  padding: 0 2.4rem;

  img {
    margin: 5.4rem 0;
    width: 100%;
  }

  img.section-1 {
    content: url(${bgMobile1});
  }
  img.section-2 {
    content: url(${bgMobile2});
  }
  p {
    padding: 21px 7px 50px;
  }
  .article-title {
    padding: 0 6.4rem;
    line-height: 1.3;
  }
`;

export default Section;
