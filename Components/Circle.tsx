/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FunctionComponent } from 'react'

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
    height: ${height};
    width: ${width};
    background: ${background};
    border-radius: 100%;
    position: absolute;
    filter: blur(90px);
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
  `
  return <div css={CircleStyle}></div>
}

export default Circle
