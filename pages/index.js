/** @jsx jsx */
import { useContext, useState } from 'react';
import { css, jsx } from '@emotion/core';
import Head from 'next/head';
import ProjectCard from '../Components/ProjectCard.tsx';
import 'react-toggle/style.css';
import Context from '../util/context';

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const { dispatch } = useContext(Context);

  const handleOnClick = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
    setIsDark(!isDark);
  };

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
    text-align: center;

    .name,
    .projects {
      text-transform: capitalize;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 0rem;
      text-align: center;
      margin-top: 8rem;
    }

    .projects {
      font-size: 1.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    .subHeading {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }

    .jogg {
      background: linear-gradient(to left, #c5327b, #ea4a26);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
      }
    }
  `;

  const Button = css`
    width: 100%;
    background: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;

  return (
    <section css={Container}>
      <Head>
        <title>Emily Kondziola</title>
        <link rel='icon' href='home.png' />
      </Head>
      <section>
        <button onClick={handleOnClick} css={Button}>
          {isDark ? '🌞' : '🌒'}
        </button>
        <div>
          <h1 className='name'>Emily Grace Kondziola</h1>
          <div className='subHeading'>
            <h2>
              Software Engineer at{' '}
              <a href='https://studio.jogg.co/' className='jogg'>
                Jogg
              </a>
            </h2>
            {/* <div>
                <a href='https://github.com/emilygracekz'>
                  <img src='github-logo.png' alt='github' height='25' />
                </a>
                <a href='https://www.linkedin.com/in/emilykondziola/'>
                  <img src='linkedinlogo.png' alt='linkedin' height='25' />
                </a>
              </div> */}
          </div>
        </div>
      </section>
      <section>
        <h1 className='projects'>Selected Projects</h1>
        <div className='grid'>
          <ProjectCard
            headline='Nomad Discover'
            body='An app that suggests where digital nomads should go next. Nomad Discover takes criteria like budget and weather to suggest a place for nomads to go based off data from Nomad List.'
            repo='https://github.com/emilygracekz/nomadDiscover'
            liveSite='https://emilygracekz.github.io/nomadDiscover/'
          />
          <ProjectCard
            headline='Impromptu Timer'
            body='A tool for college forensics competitors to practice impromptu speeches. This timer counts down from seven minutes and provides a random quotation when the start button is pressed.'
            repo='https://github.com/emilygracekz/impromptu-timer'
            liveSite='https://www.emilykondziola.com/impromptu-timer'
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
