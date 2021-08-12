import React from 'react';
import ReactDOM from 'react-dom';
import './brand-style.css';
import './block.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Home} />
      <Route path="/blog/" exact component={Home} />
      <Route path="/blog/post" exact component={App} />
      <Route path="/post" exact component={App} />
      <Route path="/blog/post/:id/:url" component={App} />
      <Route path="/blog/post/:id" component={App} />
      <Route path="/blog/:id/:url" component={App} />
      <Route path="/post/:id/:url" component={App} />
      <Route path="/blog/:id" component={App} />
      <Route path="/post/:id" component={App} />
      <Route path="/:id/:url" component={App} />
      <Route path="/:id" component={App} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);
reportWebVitals();
