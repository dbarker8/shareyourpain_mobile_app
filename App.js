import React from 'react';
import Navigator from './app/Navigation';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Font } from 'expo';
import reducers from './app/redux/reducers';
import LoginScreen from './app/screens/LoginScreen';

const store = createStore(reducers);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fontLoaded: false
    }
  }

  async componentDidMount(){

    await Font.loadAsync({
      'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    });

    this.setState({fontLoaded: true});

  }

  render() {
    return (
      this.state.fontLoaded==true ? 
      <Provider store={store}>
        <Root>
          <Navigator />
          {/* <LoginScreen /> */}
        </Root>
      </Provider>
      : null
    );
  }
}
