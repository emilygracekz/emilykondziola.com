/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ProjectCard = ({ headline, body, sitePic, alt, repo, liveSite }) => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(150, 235, 220, 1);
    border-radius: 1rem;
    width: 100%;
    max-width: 1030rem;
    padding: 0.5rem;
    align-self: center;
    margin-bottom: 10rem;

    h1 {
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      border-radius: 1rem;
    }

    p {
      text-align: right;
      justify-content: right;
    }

    .links {
      display: flex;
      justify-content: space-between;
      font-size: 900;
    }
  `;

  return (
    <section css={Container}>
      <h1>{headline}</h1>
      <img
        className='previewImage'
        src={sitePic}
        alt={alt}
        height='200'
        width='250'
      />
      <p>{body}</p>
      <div className='links'>
        <a href={repo}>REPO</a>
        <a href={liveSite}>LIVE SITE</a>
      </div>
    </section>
  );
};

export default ProjectCard;
