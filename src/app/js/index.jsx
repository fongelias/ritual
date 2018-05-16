//AWS config
import Amplify from 'aws-amplify';
import { amplify } from './aws';
Amplify.configure(amplify);
//Other dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux';
import { App } from './components';

//Styles
require('../scss/main.scss');


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)

