/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ProjectCard = ({ headline, body, sitePic, alt, repo, liveSite }) => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px dotted lightgray;
    border-radius: 1rem;
    width: 30rem;
    padding: 0.5rem;
    align-self: center;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: .5rem
}
    
    h1 {
      font-size: 2rem;
      margin: 0rem;
      margin-bottom: .5rem;
      width: 100%;
      text-align: center;
    }

    img {
      height: 15rem;
      border-radius: 1rem;
      object-fit: cover;
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
      padding: .5rem;   
      text-align: center;
  
    }
  `;

  return (
    <section css={Container}>
      <div>
        <h1>{headline}</h1>
        <img className='previewImage' src={sitePic} alt={alt} />
        <p className='description'>{body}</p>
        <div className='links'>
          <a href={repo}>REPO</a>
          <a href={liveSite}>LIVE SITE</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
