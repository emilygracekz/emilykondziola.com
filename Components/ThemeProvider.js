import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import Context from '../util/context';
import Reducer from '../util/reducer';
import Home from '../pages/index';

const denimBlue = '#015c92';
const darkBlue = '';
const lightBlue = '';

const light = {
  text: denimBlue,
};

const dark = {
  text: lightBlue,
  background: darkBlue,
};

export default function Theme() {
  const [state, dispatch] = useReducer(Reducer, {
    isDark: false,
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <Home />
      </ThemeProvider>
    </Context.Provider>
  );
}
