import React from 'react'
import { View, Text, TouchableOpacity, Image, LayoutAnimation, Animated, Easing } from 'react-native'
import { Icon } from 'native-base'

class Story extends React.PureComponent {
  

    handleStoryPress(){
        alert('story pressed')
    }

    render() {
        return (
            <TouchableOpacity style={styles.mainContainer} onPress={this.handleStoryPress.bind(this)}>
                <Text style={styles.bodyText}>
                {this.props.item.body}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Story

const styles = {
    mainContainer: {
        width: '100%',
        minHeight: 100,
        marginVertical: 15
    },
    bodyText: {
        color: '#f7f7f7',
        fontSize: 18,
        marginHorizontal: 10
    }
}
