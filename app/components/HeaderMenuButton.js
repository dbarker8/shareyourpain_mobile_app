import React from 'react'
import { View, Text, TouchableOpacity, Image, LayoutAnimation, Animated, Easing } from 'react-native'
import { Icon } from 'native-base'

class HeaderMenuButton extends React.PureComponent {


    handleStoryPress() {
        alert('story pressed')
    }

    render() {
        return (
            <TouchableOpacity style={styles.mainContainer} onPress={() => this.props.navigate('DrawerToggle')}>
                <Icon name='ios-menu' style={styles.icon}/>
            </TouchableOpacity >
        )
    }
}

export default HeaderMenuButton

const styles = {
    mainContainer: {
        padding:8,
        paddingLeft:17
    },
    icon: {
        color: '#f7f7f7'
    }
}
