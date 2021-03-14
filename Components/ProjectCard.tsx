/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FunctionComponent } from 'react'
import Link from 'next/link'

interface Props {
  headline: string
  body: string
  repo: string
  liveSite: string
}

const ProjectCard: FunctionComponent<Props> = ({
  headline,
  body,
  repo,
  liveSite,
}) => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px dotted rgb(100, 182, 93);
    border-radius: 1rem;
    width: 20rem;
    padding: 0.5rem;
    align-self: center;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem;

    h1 {
      font-size: 1.5rem;
      margin: 0rem;
      margin-bottom: 0.5rem;
      width: 100%;
      text-align: left;
    }

    .description {
      text-align: left;
    }

    .links {
      display: flex;
      justify-content: space-between;
    }

    .innerCard {
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-radius: 1rem;
      padding: 0.5rem;
      text-align: center;
    }
  `

  return (
    <section css={Container}>
      <div>
        <h1>{headline}</h1>
        <p className='description'>{body}</p>
        <div className='links'>
          <Link href={repo}>
            <a href={repo}>REPO</a>
          </Link>
          <Link href={liveSite}>
            <a href={liveSite}>LIVE SITE</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
