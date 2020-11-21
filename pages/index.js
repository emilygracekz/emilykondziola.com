/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Head from 'next/head';
import ProjectCard from '../Components/ProjectCard';

const Home = () => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
      text-transform: capitalize;
      letter-spacing: 0.05rem;
      font-size: 2rem;
      color: black;
      margin-bottom: 0rem;
      text-align: center;
    }

    h2 {
      color: black;
      font-size: 1rem;
    }

    .subHeading {
      display: flex;
      align-items: center;
      margin-top: 3rem;
    }

    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      align-content: stretch;
      //  align-items:
    }

    .stack {
      display: flex;
      flex-direction: row;
      height: 2rem;
      margin: 0 0.4rem;
    }

    @media screen and (min-width: 702px) {
      h1 {
        font-size: 2rem;
        width: 20%;
      }

      .subHeading {
        margin-top: 0.1rem;
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
    // height: 100vh;
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
            <h1>Emily Grace Kondziola</h1>
            <div className='subHeading'>
              <h2>
                Software Engineer at Jogg 🤸‍♀️
                {/* <a href='https://studio.jogg.co/' className='jogg'> */}
                {/* </a> */}
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
          <div className='grid'>
            <ProjectCard
              headline='Nomad Discover'
              body='An app that suggests where digital nomads should go next. Nomad Discover takes criteria like budget and weather to suggest a place for nomads to go based off data from Nomad List.'
              sitePic='nomaddiscover.png'
              repo='https://github.com/emilygracekz/nomadDiscover'
              liveSite='https://emilygracekz.github.io/nomadDiscover/'
              image='images/logos.png'
            />
            <ProjectCard
              headline='Impromptu Timer'
              body='A tool for college forensics competitors to practice impromptu speeches. This timer counts down from seven minutes and provides a random quotation when the start button is pressed.'
              sitePic='imptimer.png'
              repo='https://github.com/emilygracekz/impromptu-timer'
              liveSite='https://www.emilykondziola.com/impromptu-timer'
              image='images/logos.png'
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
