import React from 'react';
import Navigator from './app/Navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/redux/reducers';
import LoginScreen from './app/screens/LoginScreen';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        {/* <LoginScreen /> */}
      </Provider>
    );
  }
}
