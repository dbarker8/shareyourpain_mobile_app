import { DrawerNavigator } from 'react-navigation';
import React from 'react';
// import { Text } from 'react-native';

//-------------------SCREENS---------------------
import  LoginScreen from './screens/LoginScreen';
import  ShareScreen from './screens/ShareScreen';
import  ViewStoriesScreen from './screens/ViewStoriesScreen';


export default class Navigator extends React.Component {


    render() {
        return <DrawerNav />;
    }

}

const DrawerNav = DrawerNavigator({
    ViewStoriesScreen: {
        screen: ViewStoriesScreen,
        navigationOptions: {
            drawerLabel: 'View Stories'
        }
    },
    ShareScreen: {
        screen: ShareScreen,
        navigationOptions: {
            drawerLabel: 'Share Story'
        }
    }
});