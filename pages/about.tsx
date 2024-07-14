/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/ajmalp5/"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/ajmalp5/"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  I completed my engineering degree in Computer Science in 2019.
                  Since then, I have accumulated 5 years of experience at Stead
                  Technologies as a full stack web developer. My expertise lies
                  in React, Next.js, JavaScript, and TailwindCSS. In addition to
                  my role at Stead Technologies, I have worked on numerous
                  freelance projects, particularly in the SaaS domain. My deep
                  understanding of technical standards, combined with my ability
                  to create visually appealing and highly functional websites,
                  ensures that every project I undertake meets the highest
                  quality standards.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Projects Page">
                  Projects{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Projects Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Projects
                </Link>
                <p>
                  Throughout my career, I have developed a versatile skill set
                  that extends beyond traditional web development. My experience
                  in research, product design, and product coordination enables
                  me to drive the growth of a product from its inception to its
                  launch. As an analytical thinker, I can seamlessly bridge the
                  technical and product aspects, ensuring the product's vision
                  is upheld throughout its development cycle. By leveraging my
                  expertise, I am able to guide a product from concept to
                  completion, ensuring its success at every stage.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my education section"
        >
          <article>
            <h4>My Education</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open ICA Primary School"
                >
                  ICA Primary School. <small>2002 – 2013</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2002 – 2013</b>
                </a>
                <p>
                  ICA Primary School offered a strong foundation in core
                  subjects and extracurricular activities, fostering creativity,
                  critical thinking, and effective communication skills. The
                  supportive environment and dedicated teachers significantly
                  contributed to my early educational development.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open ICA Higher Secondary"
                >
                  ICA Higher Secondary. <small>University of Kerala</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2013 – 2015</b>
                </a>
                <p>
                  ICA Higher Secondary School, affiliated with the University of
                  Kerala, provided rigorous science and mathematics education,
                  fostering analytical thinking and problem-solving. The
                  supportive faculty and competitive environment enhanced my
                  academic growth.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Bachelor of Science in Computer Science"
                >
                  Bachelor of Science in Computer Science.{' '}
                  <small>MES College of Engineering Kuttipuram</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2015 – 2019</b>
                </a>
                <p>
                  At MES College of Engineering Kuttipuram, affiliated with APJ
                  Abdul Kalam Technological University, I gained comprehensive
                  knowledge in computer science through practical projects,
                  internships, and seminars, developing strong technical and
                  problem-solving skills.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my professional experience section"
        >
          <article>
            <h4>My professional experience.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Senior Software Engineer at Stead Technologies LLP"
                >
                  Senior Software Engineer at Stead Technologies LLP
                  <small>Bangalore, India</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019 – present</b>
                </a>
                <p>
                  Worked on the development of a browser-based application using
                  React and TypeScript. Collaborated with cross-functional teams
                  to ensure timely delivery of project milestones. Developed new
                  features and enhancements for the application using React and
                  TypeScript. Implemented REST APIs to connect the application
                  to the backend services. Collaborated with cross-functional
                  teams to ensure timely delivery of project milestones.
                  Debugged and resolved application issues to improve user
                  experience. Website building a
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
