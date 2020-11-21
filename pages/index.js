/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Head from 'next/head';
import ProjectCard from '../Components/ProjectCard';
import Trail from '../Components/Trail';

const Home = () => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-size: 1.5rem;
      color: white;
      margin-bottom: 0rem;
      text-shadow: 4px 4px #0e2480;
      color: white;
    }

    h2 {
      color: white;
      font-size: 1rem;
      text-shadow: 1px 1px #0e2480;
    }

    .projects {
      margin-bottom: 2rem;
      text-align: center;
    }

    .grid {
      display: flex;
      justify-content: space-around;
    }

    .jogg {
      background: rgba(197, 50, 123, 1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 1px 1px white;
    }

    a:first-of-type {
      margin-right: 0.5rem;
      margin-left: 0.3rem;
    }

    .subHeading {
      display: flex;
      align-items: center;
      margin-top: 3rem;
    }

    @media screen and (min-width: 862px) {
      h1 {
        font-size: 4rem;
      }

      .subHeading {
        justify-content: space-between;
      }
    }
  `;

  const Banner = css`
    height: 20rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.5rem;
    height: 100vh;
  `;

  return (
    <section>
      <Head>
        <title>Emily Kondziola</title>
        <link rel='icon' href='home.png' />
      </Head>
      <section>
        <div css={Container}>
          <div css={Banner}>
            <Trail open={true}>
              <h1>Emily Grace Kondziola</h1>
              <div className='subHeading'>
                <h2>
                  Frontend Engineer at
                  <a href='https://studio.jogg.co/' className='jogg'>
                    Jogg
                  </a>
                </h2>
                <div>
                  <a href='https://github.com/emilygracekz'>
                    <img src='github-logo.png' alt='github' height='25' />
                  </a>
                  <a href='https://www.linkedin.com/in/emilykondziola/'>
                    <img src='linkedinlogo.png' alt='linkedin' height='25' />
                  </a>
                </div>
              </div>
            </Trail>
          </div>
          <section>
            <h1 className='projects'>selected projects</h1>
            <div className='grid'>
              <ProjectCard
                headline={'Nomad Discover'}
                body={
                  'An app that suggests where digital nomads should go next. Nomad Discover takes criteria like budget and weather to suggest a place for nomads to go based off data from Nomad List.'
                }
                sitePic={'nomaddiscover.png'}
                repo={'https://github.com/emilygracekz/nomadDiscover'}
                liveSite={'https://emilygracekz.github.io/nomadDiscover/'}
                image={'images/logos.png'}
              />
              <ProjectCard
                headline={'Impromptu Timer'}
                body={
                  'A tool for college forensics competitors to practice impromptu speeches. This timer counts down from seven minutes and provides a random quotation when the start button is pressed.'
                }
                sitePic={'imptimer.png'}
                repo={'https://github.com/emilygracekz/impromptu-timer'}
                liveSite={'https://www.emilykondziola.com/impromptu-timer'}
                image={'images/logos.png'}
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Home;
