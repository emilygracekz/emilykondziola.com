/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Head from 'next/head';
import ProjectCard from '../Components/ProjectCard';
import Trail from '../Components/Trail';
import { useState } from 'React';

const Home = () => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-size: 2rem;
      color: white;
      margin-bottom: 0rem;
      text-shadow: 4px 4px #0e2480;
      color: white;
    }

    p {
      color: white;
      // font-size: 1rem;
      text-shadow: 1px 1px #0e2480;
    }

    @media screen and (min-width: 702px) {
      h1 {
        font-size: 4rem;
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
              <p>Frontend Engineer at Jogg</p>
            </Trail>
            <footer>{/* <p>emilygracekondziola@gmail.com</p> */}</footer>
          </div>
          <ProjectCard
            headline={'Nomad Discover'}
            body={
              'An app that suggests where digital nomads should go next. Nomad Discover takes criteria like budget and weather to suggest a place for nomads to go based off data from Nomad List.'
            }
            sitePic={'images/nomaddiscover.png'}
            repo={'https://github.com/emilygracekz/nomadDiscover'}
            liveSite={'https://emilygracekz.github.io/nomadDiscover/'}
            image={'images/logos.png'}
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
