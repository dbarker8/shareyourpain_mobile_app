import React from 'react'
import {
    View,
    KeyboardAvoidingView,
    Image,
    ImageBackground
} from 'react-native'
import { Form, Item, Label, Input, Icon, Button, Spinner, Text } from 'native-base'

import { connect } from 'react-redux';


class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            renderLogin: true //false renders "register new user", true renders login
        }
    }



    handleSubmitPress(){

    }

    render() {
        let buttonContent = this.state.loading ? 
            <Spinner color='white' /> :
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Log In</Text> ;

        let middle = this.state.renderLogin ? 

            <Form style={styles.form}>
            <Text key='underLogoText' style={styles.underLogoText}>
                Login to NoFace
            </Text>
            <Item floatingLabel style={styles.inputItem}>
                <Label style={{color: 'white'}}>Email</Label>
                <Input
                    keyboardType={"email-address"}
                    selectionColor={"white"}
                    autoCorrect={false}
                    autoCapitalize='none' 
                    style={{color:'white'}}
                    onChangeText={x => this.setState({email:x})} 
                />
            </Item>
            <Item floatingLabel style={styles.inputItem}>
                <Label style={{color: 'white'}}>Password</Label>
                <Input
                    selectionColor={"white"}
                    autoCorrect={false}
                    autoCapitalize='none' 
                    style={{color:'white'}}
                    onChangeText={x => this.setState({password:x})} 
                    secureTextEntry={true} 
                />
            </Item>
            <Button block light style={{marginTop:20}} onPress={this.handleSubmitPress.bind(this)}>
                {buttonContent}
            </Button>
            </Form>
            :
            <Form style={styles.form}>
            <Text key='underLogoText' style={styles.underLogoText}>
                Register a new account!
            </Text>
            <Item floatingLabel style={styles.inputItem}>
                <Label style={{color: 'white'}}>Email</Label>
                <Input
                    keyboardType={"email-address"}
                    selectionColor={"white"}
                    autoCorrect={false}
                    autoCapitalize='none' 
                    style={{color:'white'}}
                    onChangeText={x => this.setState({email:x})} 
                />
            </Item>
            <Item floatingLabel style={styles.inputItem}>
                <Label style={{color: 'white'}}>Password</Label>
                <Input
                    selectionColor={"white"}
                    autoCorrect={false}
                    autoCapitalize='none' 
                    style={{color:'white'}}
                    onChangeText={x => this.setState({password:x})} 
                    secureTextEntry={true} 
                />
            </Item>
            <Button block light style={{marginTop:20}} onPress={this.handleSubmitPress.bind(this)}>
                {buttonContent}
            </Button>
            </Form>

        return (
            // <View style={styles.container} >
                <ImageBackground source={require('../../assets/img/chalkboard.jpg')} style={styles.imageBackground} >
                    <KeyboardAvoidingView  behavior='padding' keyboardVerticalOffset={0} >
                        <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
                        {middle}
                    </KeyboardAvoidingView>
                </ImageBackground>
            // </View>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(LoginScreen);

const styles = {
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // width:'100%',
    },
    imageBackground: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%'
    },
    logo: {
        alignSelf: 'center',
        marginTop:50,
        flex:.15,
        resizeMode: 'contain',
        minHeight:50,
    },
    underLogoText: {
        alignSelf: 'center',
        margin:20,
        marginBottom:10,
        fontSize:20,
        color: 'white',
        textAlign: 'center',
        // flex:.2
    },
    form: {
        width:'70%',
        alignSelf: 'center',
        flex:.75,
        marginBottom:20,

    },
    inputItem: {
        marginRight:15,
        width: '100%'
    },
}