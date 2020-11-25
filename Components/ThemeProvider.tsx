import React, { useReducer } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { light, dark } from './themes';
import Context from './context';
import reducer from './reducer';
