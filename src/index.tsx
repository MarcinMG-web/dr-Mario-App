import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import {Table} from './Component/Table'
import {Heder} from './Component/Heder'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
   <div className="app">
      <Heder />
      <Table />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();