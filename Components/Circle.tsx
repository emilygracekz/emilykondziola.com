/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { theme } from '../styles/theme'

interface Props {
  background: string
  height: string
  width: string
  top?: string
  left?: string
  right?: string
  bottom?: string
}

const Circle: FunctionComponent<Props> = ({
  background,
  height,
  width,
  top,
  left,
  right,
  bottom,
}) => {
  const CircleStyle = css`
    height: 190px;
    width: 190px;
    background: ${background};
    border-radius: 100%;
    position: absolute;
    filter: blur(110px);
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};

    ${theme.mediaQuery.ipad} {
      height: ${height};
      width: ${width};
    }
  `
  return <div css={CircleStyle}></div>
}

export default Circle
