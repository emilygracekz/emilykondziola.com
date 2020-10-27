/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ProjectCard = ({ headline, body, sitePic, alt, repo, liveSite }) => {
  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background:;
    border-radius: 1rem;
    width: 30rem;
    padding: 0.5rem;
    align-self: center;
    margin-bottom: 10rem;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;

    -webkit-box-shadow: 4px 8px 12px 0px #000000; 
    box-shadow: 2px 4px 12px 0px #000000;

}
    
    h1 {
      font-size: 2rem;
      text-align: center;
      margin: 0;
    }

    img {
      display: flex;
      justify-content: center;
      align-self: center;
      border-radius: 1rem;
      margin: 1rem 0;
      align-items: center;
    }

    .links {
      display: flex;
      justify-content: space-between;
    }

    .innerCard {
      display: flex;
      justify-content: center;
      flex-direction: column;
      // background: ;
      border-radius: 1rem;
      padding: .5rem;
      text-align: center;

      
    }
  `;

  return (
    <section css={Container}>
      <div className='innerCard'>
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
      </div>
    </section>
  );
};

export default ProjectCard;
