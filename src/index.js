import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import App_useRef2 from "./App_useRef2";
import App_useRef3 from "./App_useRef3";
import App_useRef4 from "./App_useRef4";
import App_useEffect_01 from "./App_useEffect_01";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<App />*/}
    {/*  <App_useRef2/>*/}
    {/*  <App_useRef3/>*/}
    {/*  <App_useRef4/>*/}
      <App_useEffect_01/>
  </>
);

