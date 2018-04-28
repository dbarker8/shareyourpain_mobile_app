import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    Dimensions,
    ScrollView,
    Spinner,
    Keyboard
} from 'react-native'
import { Text, Button, Icon, Picker, Form, Toast } from 'native-base';
import { connect } from 'react-redux';
import { ColorPicker } from 'react-native-color-picker'

const { height, width } = Dimensions.get('window');

class EnterStoryScreen extends React.Component {

    static navigationOptions = (props) => {
        return {
          headerTitle: 'Share '+props.navigation.state.params.storyType
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            storyText: '',
            selectedFont: null, //make these default
            selectedColor: null,
            loading: false,
        }
    }

    onFontChange(value){
        this.setState({selectedFont: value});

    }

    handleSendPress(){
        Keyboard.dismiss();
        this.setState({loading: true});
        fetch('https://shareyourpain.herokuapp.com/enterstory', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            storyBody: this.state.storyText,
            color: this.state.selectedColor, 
            font: this.state.selectedFont,
          }),
        }).then(result => {
          if(result.status==200){ //if request went OK, tell the user
            // alert('Your story has been submitted.');
            Toast.show({
              text: 'Your story has been submitted',
              buttonText: 'Okay'
            })
          }else{ //something went wrong
            // alert('Story was not submitted. Please check your internet connection, or try again');
            Toast.show({
                text: 'Your story was not submitted. Please check your internet connection, or try again',
              buttonText: 'Okay'
            })
          }
          this.setState({ loading: false });          
          this.props.navigation.goBack();

        }).catch((error) => {
          console.log(error);
        });
    }

    setChatInput(value) { this.setState({ chatInput: value }) };

    render() {
        let buttonContent =  <Text>Share</Text> ;
        // this.state.loading ? <Spinner size='small' color='white' /> :


        return (
            <ImageBackground source={require('../../assets/img/chalkboard.jpg')} style={styles.imageBackground} >
                <SafeAreaView style={styles.container} >
                    <ScrollView 
                        style={styles.scrolLView} 
                        keyboardDismissMode='on-drag'
                        keyboardShouldPersistTaps='never'
                    >
            
                        <View style={styles.storyTextWrapper}>
                            <TextInput
                                style={styles.storyText}
                                value={this.state.storyText}
                                onChangeText={x => this.setState({storyText: x})} 
                                underlineColorAndroid='transparent'
                                multiline={true}
                                returnKeyType='send'
                                onSubmitEditing={() => this.handleSendPress(this.props.navigation.state.params.storyType)}
                            />
                        </View>
                        {/* <Form> */}
                        <Picker
                          style={{width:'100%', height:80}}
                          iosHeader="Select one"
                          placeholder="Select font..."
                          mode="dropdown"
                          selectedValue={this.state.selectedFont}
                          onValueChange={this.onFontChange.bind(this)}
                        >
                          <Picker.Item label="Font 1" value="key0" />
                          <Picker.Item label="Font 2" value="key1" />
                          <Picker.Item label="a different font" value="key2" />
                        </Picker>
                        {/* </Form> */}

                        <ColorPicker
                          onColorSelected={color => alert(`Color selected: ${color}`)}
                          style={styles.colorPicker}
                        />

                        <Button  style={styles.sendButton} bordered block light onPress={() => this.handleSendPress(this.props.navigation.state.params.storyType)}>
                            {buttonContent}
                        </Button>

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        )
    }

}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(EnterStoryScreen);

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
    storyText: {
        color: '#f7f7f7',
        justifyContent: 'flex-start',
        padding: 8,
        flex: 1
    },
    storyTextWrapper: {
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius: 10,
        minHeight:'30%',
        padding:10,
        width: width-20,
        marginTop:10,
        justifyContent: 'flex-start',
    },
    colorPicker: {
        flex:1
        
    },
    sendButton: {
        marginTop:10
    }
}