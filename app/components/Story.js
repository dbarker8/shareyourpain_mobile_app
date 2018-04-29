import React from 'react'
import { View, Text, TouchableOpacity, Image, LayoutAnimation, Animated, Easing } from 'react-native'
import { Icon } from 'native-base'

class Story extends React.PureComponent {
  

    handleStoryPress(){
        alert('story pressed')
    }

    render() {
        let imageSource = this.props.item.type=='hope' ? 
            this.props.heart : this.props.brokenHeart ;
        
        let customStyle = JSON.parse(this.props.item.style);

        return (
            <TouchableOpacity 
                style={[
                    styles.mainContainer, {
                        transform: [{ rotate: customStyle.tiltAngle + 'deg' }], 
                        marginVertical: this.props.topMargin ? customStyle.randomMargin + this.props.topMargin : customStyle.randomMargin,
                        width: customStyle.randomWidth+'%'
                } ]} 
                onPress={this.handleStoryPress.bind(this)}
            >
            <View style={{width: customStyle.leftBoxWidth+'%'}}></View>
            <Image source={imageSource} style={styles.heart} />
                <Text style={[styles.bodyText, {fontSize: customStyle.randomFontSize} ]}>
                {this.props.item.body}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Story

const styles = {
    mainContainer: {
        flexDirection: 'row',
        // width: '100%',
        minHeight: 100
    },
    bodyText: {
        color: '#f7f7f7',
        marginHorizontal: 10,
        fontFamily: 'Nunito'
    },
    heart: {
        margin:5,
        height:20,
        width:20
    }
}
