/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { theme } from '../styles/theme'
import { useMediaQuery } from 'react-responsive'

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
  const isMobileOrIpad = useMediaQuery({ maxWidth: 940 })

  const CircleStyle = css`
    height: 190px;
    width: 190px;
    background: ${background};
    border-radius: 100%;
    position: absolute;
    filter: ${isMobileOrIpad ? 'blur(100px)' : 'blur(170px)'};
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
