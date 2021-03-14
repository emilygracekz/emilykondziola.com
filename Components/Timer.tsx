import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Timer = () => {
  const [seconds, setSeconds] = useState(420)
  const [isActive, setIsActive] = useState(false)

  const reset = () => {
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

  return (
    <StyledTimer>
      <div className='container'>
        <div className='app'>
          <div className='time'> {displayTimeLeft(seconds)}</div>
          <ButtonStyling>
            <div className='row'>
              <button
                className={`button button-primary button-primary-${
                  isActive ? 'active' : 'inactive'
                }`}
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? 'Pause' : 'Start'}
              </button>
              <button className='button' onClick={reset}>
                Reset
              </button>
            </div>
          </ButtonStyling>
        </div>
      </div>
    </StyledTimer>
  )
}

const StyledTimer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .time {
    font-size: 8rem;
    padding: 10px;
    text-align: center;
    color: var(--white);
    font-weight: bold;
  }
  @media (min-width: 650px) {
    .time {
      font-size: 18rem;
      padding: 3px;
    }
  }
`

const ButtonStyling = styled.div`
  .button {
    padding: 0.6rem 1.5rem;
    margin: 10px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
  }
  .row {
    text-align: center;
  }
  .button:focus {
    outline-width: 0;
  }
  .button-primary:hover {
    background-color: var(--lightGray);
    border: 2px solid var(--darkGray);
  }
  .button-primary-active {
    background-color: var(--lightGray);
    border: 2px solid var(--darkGray);
    color: white;
  }
  .button-primary-inactive {
    background-color: var(--lightPink);
    border: 2px solid var(--darkPink);
    color: white;
  }
`

export default Timer
