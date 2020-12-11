import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import Context from '../util/context';
import Reducer from '../util/reducer';
import Home from '../pages/index';

const black = '#363537';
const lightGrey = '#E2E2E2';
const white = '#FAFAFA';

const light = {
  text: black,
  background: lightGrey,
};

const dark = {
  text: white,
  background: black,
};

export default function Theme() {
  const [state, dispatch] = useReducer(Reducer, {
    isDark: false,
  });

  console.log(state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <>
          <Home />
        </>
      </ThemeProvider>
    </Context.Provider>
  );
}
