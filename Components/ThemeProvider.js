import React, { useReducer } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Context from '../util/context';
import Reducer from '../util/reducer';
import Home from '../pages/index';

const GlobalStyles = createGlobalStyle`
body, #root {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    align-items: center;
    padding: 0.5rem;
    margin: 0;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    background: linear-gradient(to left, #41e975, #335cc5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    font-weight: 600;
  }

    * {
      box-sizing: border-box;
    }
}
`;

const darkBlue = '#015c92';
const black = '#133072';
const yellow = '#ffdd55';

const light = {
  text: darkBlue,
  background: '#fff',
};

const dark = {
  text: yellow,
  background: black,
};

export default function Theme() {
  const [state, dispatch] = useReducer(Reducer, {
    isDark: false,
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <>
          <GlobalStyles />
          <Home />
        </>
      </ThemeProvider>
    </Context.Provider>
  );
}
