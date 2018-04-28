import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native'
import { Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';


class ShareScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    handleSharePress(x){
        this.props.navigation.navigate('EnterStoryScreen', {storyType: x} );    
    }

    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {

        return (
            <View style={styles.container} >
                <ImageBackground source={require('../../assets/img/chalkboard.jpg')} style={styles.imageBackground} >

                <TouchableOpacity style={styles.shareButton} onPress={() => this.handleSharePress('pain')}>
                    <Image source={require('../../assets/img/broken_heart.png')} style={styles.buttonIcon} />
                    <Text style={styles.shareText}>Share Pain</Text>
                </TouchableOpacity>

                <View style={{ height: 50 }}></View> {/*seperate buttons */}
                
                <TouchableOpacity style={styles.shareButton} onPress={() => this.handleSharePress('hope')}>
                    <Image source={require('../../assets/img/heart.png')} style={styles.buttonIcon} />
                    <Text style={styles.shareText}>Share Hope</Text>
                </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(ShareScreen);

const styles = {
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shareButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        width: '80%',
        borderRadius:20,
        // borderColor: '#f7f7f7',
        // borderWidth:1
    },
    shareText: {
        fontSize: 28,
        color: '#f7f7f7'
    },
    buttonIcon: {
        height: 50,
        width: 50
    }
}