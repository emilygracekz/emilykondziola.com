/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'

const Quote: FunctionComponent = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [hyphen, setHyphen] = useState('')

  const fetchData = async () => {
    let data, result
    try {
      data = await fetch('https://api.quotable.io/random')
      result = await data.json()
    } catch (err) {
      console.log(err)
    }
    return result
  }

  const populateData = async () => {
    const result = await fetchData()
    setQuote(result.content)
    setAuthor(result.author)
    setHyphen('-')
  }

  useEffect(() => {
    populateData
  }, [])

  const QuoteStyle = css`
    text-align: center;
    background-color: #536197;
    width: 300px;
    height: 250px;
    border-radius: 20px;
    padding: 20px;

    .top {
      padding-top: 10px;
      height: 75%;
    }

    .quote-text,
    .author-text {
      color: var(--white);
      font-size: 20px;
      line-height: 1.2;
    }

    .get-quote-button {
      padding: 0.6rem 1.5rem;
      margin: 10px;
      border-radius: 30px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.8rem;
      background-color: var(--lightBlue);
      border: 2px solid var(--darkBlue);
      color: white;
    }

    .get-quote-button:hover {
      background-color: var(--lightGray);
      border: 2px solid var(--darkGray);
    }

    @media (min-width: 650px) {
      width: 700px;
    }
  `

  return (
    <section css={QuoteStyle}>
      <div className='top'>
        <p className='quote-text'>{quote}</p>
        <p className='author-text'>{`${hyphen}${author}`}</p>
      </div>
      <div className='bottom'>
        <button className='get-quote-button' onClick={populateData}>
          Get Quotation
        </button>
      </div>
    </section>
  )
}

export default Quote
