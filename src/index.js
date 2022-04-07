import React from 'react';
import { render } from 'react-dom'
import './index.css';
//import { createStore } from 'redux'
import App from './App';

import { Provider } from 'react-redux'

//const store = createStore(rootReducer)

render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
{/* //    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
