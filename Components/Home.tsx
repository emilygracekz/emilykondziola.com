/** @jsx jsx */
import { useContext, useState } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import ProjectCard from '@components/ProjectCard'
import Context from '@util/context'
import Switch from 'react-switch'
import { theme } from '@styles/theme'

const Home = () => {
  const [isDark, setIsDark] = useState(true)
  const { dispatch } = useContext(Context)

  const handleOnClick = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' })
    setIsDark(!isDark)
  }

  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .switch {
      left: 85%;
    }

    .name,
    .projects {
      text-transform: capitalize;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 0rem;
      text-align: center;
      margin-top: 7rem;
      z-index: 1;
    }

    .projects {
      font-size: 1.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
      z-index: 1;
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

    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: stretch;
    }

    ${theme.mediaQuery.ipad} {
      .switch {
        left: 90%;
      }

      .name {
        font-size: 2rem;
      }
    }

    ${theme.mediaQuery.desktop} {
      .switch {
        left: 95%;
      }
    }
  `

  return (
    <section css={Container}>
      <Head>
        <title>Emily Kondziola</title>
        <link rel='icon' href='home.png' />
      </Head>
      <section>
        <Switch
          onChange={handleOnClick}
          checked={isDark}
          checkedIcon={false}
          uncheckedIcon={false}
          className='switch'
        />
        <div>
          <h1 className='name'>Emily Kondziola</h1>
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
  )
}

export default Home
