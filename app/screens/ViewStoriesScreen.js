import React from 'react'
import {
    View,
} from 'react-native'
import { Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';


class ViewStoriesScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }



    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {

        return (
            <View style={styles.container} >
                <Text style={{ margin: 50 }}>View stories page</Text>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(ViewStoriesScreen);

const styles = {
    container: {
        flex: 1,
    }
}