/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ProjectCard = ({
    headline,
    body,
    sitePic,
    alt,
    repo,
    liveSite,
    image,
    secondImage,
  }) => {

    const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background: #DCDCDC;
    width: 90%;
    max-width: 1030rem;

    h3 {
        size: 1rem;
    }
    `

    const Card = css`
    
    `

return (
<section css={Container}>
<div>
<img className='previewImage' src={sitePic} alt={alt} />
<h1>{headline}</h1>
<p>{body}</p>
<div className='links'>
<a href={repo}>REPO</a>
<a href={liveSite}>LIVE SITE</a>
</div>
</div>
</section>
)
  }

  export default ProjectCard