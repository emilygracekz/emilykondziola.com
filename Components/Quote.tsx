import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [hyphen, setHyphen] = useState('');

  const fetchData = async () => {
    let data, result;
    try {
      data = await fetch('https://api.quotable.io/random');
      result = await data.json();
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  const populateData = async () => {
    const result = await fetchData();
    setQuote(result.content);
    setAuthor(result.author);
    setHyphen('-');
  };

  useEffect(() => {
    populateData;
  }, []);

  return (
    <StyledProjects>
      <div className='box'>
        <div className='top'>
          <p>{quote}</p>
          <p>{`${hyphen}${author}`}</p>
        </div>
        <div className='bottom'>
          <ButtonStyling>
            <button className='button' onClick={populateData}>
              Get Quotation
            </button>
          </ButtonStyling>
        </div>
      </div>
    </StyledProjects>
  );
}

export default Quote;

const StyledProjects = styled.div`
  .box {
    text-align: center;
    background-color: #536197;
    width: 300px;
    height: 250px;
    border-radius: 20px;
    padding: 20px;
  }
  .top {
    padding-top: 10px;
    height: 75%;
  }
  p {
    color: var(--white);
    font-size: 20px;
    line-height: 1.2;
  }
  @media (min-width: 650px) {
    .box {
      width: 700px;
    }
  }
`;

const ButtonStyling = styled.div`
  .button {
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
  .button:hover {
    background-color: var(--lightGray);
    border: 2px solid var(--darkGray);
  }
  .row {
    text-align: center;
  }
`;
