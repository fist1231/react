// import 'babel-polyfill';
// import 'whatwg-fetch'

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import AppPub from './AppPub';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';

import './styles/nspires.css';

import Home from './components/Home';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  {users:[{id:101, name:"user-101"}, {id:102, name:"user-102"}, {id:103, name:"user-103"}], usersFilter: "SHOW_ALL" },
  applyMiddleware(...middleware)
)

const isLoggedIn = () => {
  console.log('************* isLoggedIn =' + (localStorage.getItem('loggedIn') === 'true') );
  return (localStorage.getItem('loggedIn') === 'true') ;
}

ReactDOM.render((
  <div>
    {console.log('************* isLoggedIn??? =' + isLoggedIn() )}
    <BrowserRouter>
      <Provider store={store}>
        {/* <Route path="/" component={App} /> */}
        <Route path="/" render={ ({location}) => (
            isLoggedIn() ? (
              <Route path="/" component={App} />
            ) : (
              <Route path="/" component={AppPub} />
            )
          )}
        />

{/*
        <Route path="/" render={ ({location}) => (
            store.getState().auth.loggedIn ? (
              <Route path="/" component={App} />
            ) : (
              <Route path="/" component={AppPub} />
            )
          )}
        />
 */}
      </Provider>
    </BrowserRouter>
  </div>
), document.getElementById('root'));
registerServiceWorker();
