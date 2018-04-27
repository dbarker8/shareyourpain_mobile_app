import React from 'react'
import {
    View,
} from 'react-native'
import { Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';


class ShareScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }



    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {

        return (
            <View style={styles.container} >
                <View style={styles.shareButton}>
                    <Text style={styles.shareText}>Share Pain</Text>
                </View>
                <View style={styles.shareButton}>
                    <Text style={styles.shareText}>Share Hope</Text>
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    shareButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '80%'
    },
    shareText: {
        fontSize: 24
    }
}