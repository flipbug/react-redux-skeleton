import React from 'react'
import ReactDOM from 'react-dom'
import WebFontLoader from 'webfontloader'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Home from './routes/Home'
import Reporting from './routes/Reporting'
import Settings from './routes/Settings'
import appStore from './reducers'
import './styles/index.css'


WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});


let initialState = {
  'reporting': {
    'items': [...new Array(10)].map((_, i) => ( {key: i, columns: ["foo", "bar"]} ))
  },
  'user': {
    'isLoggedIn': false,
  },
  'app': {
    'route': window.location.pathname,
    'sidebarVisible': true
  }
};

let store = createStore(appStore, initialState);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/reporting" component={Reporting}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
