import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';
import Main from './Main';
import Course from './components/Course';

const router = (
  <Router history={createBrowserHistory}>
    <Route exact path="/" component={Main}></Route>
    <Route exact path="/" component={Main}></Route>
    <Route path="/courses/:courseid" component={Course}></Route>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
