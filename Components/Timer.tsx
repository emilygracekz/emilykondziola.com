/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useState, useEffect, FunctionComponent } from 'react'

const Timer: FunctionComponent = () => {
  const [seconds, setSeconds] = useState<number>(420)
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setSeconds(420)
    setIsActive(false)
  }

  const displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60

    if (seconds < 0) {
      return '0:00'
    } else {
      return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    }
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  const TimerStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    .time {
      font-size: 8rem;
      padding: 10px;
      text-align: center;
      color: var(--white);
      font-weight: bold;
    }

    .row {
      text-align: center;
    }

    @media (min-width: 650px) {
      .time {
        font-size: 16rem;
        padding: 3px;
      }
    }
  `

  const ButtonStyle = css`
    padding: 0.6rem 1.5rem;
    margin: 10px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;

    .button-primary:hover {
      background-color: var(--lightGray);
      border: 2px solid var(--darkGray);
    }

    .button-primary-active {
      background-color: var(--lightPink);
      border: 2px solid var(--darkPink);
      color: white;
    }

    .button-primary-inactive {
      background-color: var(--lightPink);
      border: 2px solid var(--darkPink);
      color: white;
    }
  `

  return (
    <section css={TimerStyle}>
      <div className='time'> {displayTimeLeft(seconds)}</div>
      <div className='row' css={ButtonStyle}>
        <button
          css={ButtonStyle}
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggleIsActive}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='button' css={ButtonStyle} onClick={resetTimer}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default Timer
