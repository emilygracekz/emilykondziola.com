/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Loading = () => {
  const Loading = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    text-align: center;
  `

  return <p css={Loading}>💃 🕺</p>
}

export default Loading
