import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'

const store=configureStore()

store.subscribe(()=>{
  console.log('updated',store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


