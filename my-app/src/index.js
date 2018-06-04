import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App,{Main} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
       <Main/>
    </BrowserRouter>
    , document.getElementById('root')
  );
registerServiceWorker();
