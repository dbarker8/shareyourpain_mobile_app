import { DrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import { TouchableOpacity } from 'react';
import { Text, Icon } from 'native-base';
import HeaderMenuButton from './components/HeaderMenuButton';
// import { Text } from 'react-native';

//-------------------SCREENS---------------------
import LoginScreen from './screens/LoginScreen';
import ShareScreen from './screens/ShareScreen';
import ViewStoriesScreen from './screens/ViewStoriesScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import JournalScreen from './screens/JournalScreen';
import EnterStoryScreen from './screens/EnterStoryScreen';


export default class Navigator extends React.Component {


    render() {
        return <StackNav />;
    }

}

const DrawerNav = DrawerNavigator({
    ShareScreen: {
        screen: ShareScreen,
        navigationOptions: {
            drawerLabel: 'Share Story'
        }
    },

    ViewStoriesScreen: {
        screen: ViewStoriesScreen,
        navigationOptions: {
            drawerLabel: 'View Stories'
        }
    },

    // JournalScreen: {
    //     screen: JournalScreen,
    //     navigationOptions: {
    //         drawerLabel: 'Journal'
    //     }
    // },

    // ProfileScreen: {
    //     screen: ProfileScreen,
    //     navigationOptions: {
    //         drawerLabel: 'Profile'
    //     }
    // },
    SettingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
            drawerLabel: 'Settings'
        }
    }

});

const StackNav = StackNavigator({
    DrawerNav: {
        screen: DrawerNav,
        navigationOptions: ({ navigation }) => ({
            // header: null,
            headerLeft: (<HeaderMenuButton navigate={navigation.navigate} />),
            
        }),
    },
    EnterStoryScreen: {
        screen: EnterStoryScreen,
        navigationOptions: ({ navigation }) => ({
            // header: null,
            // headerLeft: (<HeaderMenuButton navigate={navigation.navigate} />),
            
        }),
    },
}, { 
        navigationOptions: {
        headerTitle: 'Share Your Pain',
        headerStyle: {
          backgroundColor: '#424242',
        },
        headerTitleStyle: {
            color: '#f7f7f7'
        },
    }
})
