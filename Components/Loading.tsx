/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { theme } from "@styles/theme";

const Loading = () => {
  const Loading = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    text-align: center;

    ${theme.mediaQuery.ipad} {
      font-size: 8rem;
    }
  `

  return <p css={Loading}>💃 🕺</p>
}

export default Loading
