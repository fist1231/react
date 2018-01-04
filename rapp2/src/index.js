// import 'babel-polyfill';
// import 'whatwg-fetch'

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers'
import thunk from 'redux-thunk'

import { createLogger } from 'redux-logger'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

// const store = createStore(reducer)

// const store = createStore(
//   reducer,
//   {users:[{id:101, name:"zhoppa"}, {id:102, name:"zhoppa-2"}, {id:103, name:"zhoppa-3"}], usersFilter: "SHOW_ALL"}
// )

// const store = createStore(reducer, {users:[{id:101, name:"zhoppa", disabled: false}, {id:102, name:"zhoppa-2", disabled: false},{id:103, name:"zhoppa-3", disabled: false}], usersFilter: "SHOW_ALL"})

const store = createStore(
  reducer,
  {users:[{id:101, name:"zhoppa"}, {id:102, name:"zhoppa-2"}, {id:103, name:"zhoppa-3"}], usersFilter: "SHOW_ALL"},
  applyMiddleware(...middleware)
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
