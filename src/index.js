// React Core
import React from 'react';
import ReactDOM from 'react-dom';

// Redux store and provider
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { fetchMemes } from './actions';

// React custom components
import App from './component/App';


//styles
import './styles/bootstrap.css';
import './styles/index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log('state => ', store.getState());
});


// starting
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));