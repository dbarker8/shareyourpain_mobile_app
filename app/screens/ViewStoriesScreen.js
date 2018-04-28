import React from 'react'
import {
    View,
    ImageBackground,
    VirtualizedList,
    SafeAreaView,
    FlatList
} from 'react-native'
import { Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import Story from '../components/Story';

let heart = require('../../assets/img/heart.png');
let brokenHeart = require('../../assets/img/broken_heart.png');



class ViewStoriesScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: []
        }
    }

    componentWillMount(){
        fetch('https://shareyourpain.herokuapp.com/getstories', {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(result => result.json())
        .then(result => {
            if(result){
                this.setState({stories: result.stories})
            }else{
                alert("Error getting stories. Please check your internet connection or try again");
            }
        }).catch((error) => {
          console.log(error);
            // alert("Error getting stories. Please check your internet connection or try again");     
            alert(error)     
        });
    }


    renderStory(rowData){

        return(
            <Story
                item={rowData.item}
                heart={heart}
                brokenHeart={brokenHeart}
                topMargin={rowData.index==0 ? 40 : 0}
            />
        );
    }

    _keyExtractor = (item, index) => index.toString();

    render() {

        return (
            <ImageBackground source={require('../../assets/img/chalkboard.jpg')} style={styles.imageBackground} >
                <SafeAreaView style={styles.container} >

                        <VirtualizedList
                            initialNumToRender={20}
                            maxToRenderPerBatch={20}
                            updateCellsBatchingPeriod={200}
                            windowSize={5/*lower = faster app responsiveness, but slower chat load. see docs*/}
                            getItem={(data, index) => { return data[index] } }
                            getItemCount={(data) => data.length}
                            keyboardDismissMode='on-drag'
                            keyboardShouldPersistTaps='never'
                            data={ this.state.stories }
                            style={styles.mainList}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderStory.bind(this)}
                        />
                </SafeAreaView>
            </ImageBackground>
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
    },
    imageBackground: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainList: {
        // flex:1,
        marginTop:20,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red'
    }
}