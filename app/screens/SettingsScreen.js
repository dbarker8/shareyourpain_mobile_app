import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Linking
} from 'react-native'
import { Button, Text, Item, Label, Input, List, ListItem, Icon, Right, Left, Body, Separator, Switch, Picker } from 'native-base';
import { connect } from 'react-redux';


class SettingsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleLogoutPress(){
        alert('logout pressed')
    }

    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {

        return (
            <View style={styles.container} >
                <ImageBackground source={require('../../assets/img/chalkboard.jpg')} style={styles.imageBackground} >
                    <SafeAreaView style={styles.container} >

                        <List style={styles.list}>

                            <ListItem button={true} onPress={() => Linking.openURL('https://www.shareyourpain.me')} >
                                <Body>
                                    <Text style={{color: '#f5f5f5'}}>About</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>

                            <ListItem button={true} onPress={() => Linking.openURL('https://www.shareyourpain.me')} >
                                <Body>
                                    <Text style={{color: '#f5f5f5'}}>Contact Us</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>

                            {/* <ListItem button={true} onPress={this.handleLogoutPress.bind(this)} >
                                <Body>
                                    <Text style={{color: '#f5f5f5'}}>Log Out</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem> */}


                            {/* <Separator bordered>
                                <Text>Settings</Text>
                            </Separator> */}
                        </List>

                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(SettingsScreen);

const styles = {
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    list: {
        flex: 1,
        // marginTop: 100

    }
}