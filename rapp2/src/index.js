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
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/nspires.css';


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
  {users:[{id:101, name:"user-101"}, {id:102, name:"user-102"}, {id:103, name:"user-103"}], usersFilter: "SHOW_ALL"},
  applyMiddleware(...middleware)
)


ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>
), document.getElementById('root')
);
registerServiceWorker();
