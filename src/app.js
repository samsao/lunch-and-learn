import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { Tabs } from './navigation/router';
import reducers from './reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

export class App extends React.Component {
  state: { fabActive: boolean };

  constructor(props: any) {
    super(props);
    this.state = { fabActive: false };
  }
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}
