import React from 'react'
import {
    View,
} from 'react-native'
import { Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';


class ChatScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }



    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {

        return (
            <View style={styles.container} >
                <Text style={{ margin: 20 }}>Login page</Text>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(ChatScreen);

const styles = {
    container: {
        flex: 1,
    }
}