/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Head from 'next/head';
import ProjectCard from '../Components/ProjectCard.tsx';
import 'react-toggle/style.css';

const Home = () => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.5rem;
    align-items: center;

    .name {
      text-transform: capitalize;
      font-size: 2rem;
      width: 60%;
      color: black;
      margin-bottom: 0rem;
      text-align: center;
      margin-top: 8rem;
    }

    h2 {
      color: black;
      font-size: 1rem;
    }

    .subHeading {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;
    }

    .jogg {
      color: grey;
    }

    .stack {
      display: flex;
      flex-direction: row;
      height: 2rem;
      margin: 0 0.4rem;
    }

    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: stretch;
    }

    @media screen and (min-width: 702px) {
      .name {
        font-size: 2rem;
        width: 20%;
      }
    }
  `;

  return (
    <section>
      <Head>
        <title>Emily Kondziola</title>
        <link rel='icon' href='home.png' />
      </Head>
      <div css={Container}>
        <h1 className='name'>Emily Grace Kondziola</h1>
        <div className='subHeading'>
          <h2>
            Software Engineer at
            <a href='https://studio.jogg.co/' className='jogg'>
              {' '}
              Jogg
            </a>
          </h2>
        </div>
        <div className='grid'>
          <ProjectCard
            headline='Nomad Discover'
            body='An app that suggests where digital nomads should go next. Nomad Discover takes criteria like budget and weather to suggest a place for nomads to go based off data from Nomad List.'
            sitePic='nomaddiscover.png'
            repo='https://github.com/emilygracekz/nomadDiscover'
            liveSite='https://emilygracekz.github.io/nomadDiscover/'
          />
          <ProjectCard
            headline='Impromptu Timer'
            body='A tool for college forensics competitors to practice impromptu speeches. This timer counts down from seven minutes and provides a random quotation when the start button is pressed.'
            sitePic='imptimer.png'
            repo='https://github.com/emilygracekz/impromptu-timer'
            liveSite='https://www.emilykondziola.com/impromptu-timer'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
