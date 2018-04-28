import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native'
import { Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';


class ProfileScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }



    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {

        return (
            <View style={styles.container} >
                <ImageBackground source={require('../../assets/img/chalkboard.jpg')} style={styles.imageBackground} >
                    <SafeAreaView style={styles.container} >

                        <Text style={{color: '#f7f7f7', margin:30, fontSize: 30}}>Profile Screen</Text>

                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(ProfileScreen);

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
        borderRadius: 20,
        borderColor: '#f7f7f7',
        borderWidth: 1,
        margin: 10
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