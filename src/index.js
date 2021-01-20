import {useRoutes} from 'hookrouter';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import App from './App'
let routes = {
}

const Root2 = ()=>{
  const result = useRoutes(routes) 
  return result || <Fallback />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 
