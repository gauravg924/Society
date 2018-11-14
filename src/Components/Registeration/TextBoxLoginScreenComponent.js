import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView, StatusBar, Keyboard, ActivityIndicator, Platform } from 'react-native';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');


class TextBoxLoginScreenComponent extends Component {
    constructor(props) {
        super();
        this.state = {
          mobileNumber: '',    // mobile number
        }
      }
    
      getMobileNumber(mobileNumber) {
        this.props.getMobileNumber(mobileNumber)
        this.setState({ mobileNumber: mobileNumber })
      }

    render() {
        return (
            <View>
                <TextInput style={styles.btnStyle} editable={false} placeholder={'+91'} placeholderTextColor='white' underlineColorAndroid='transparent' />
                <View style={styles.bottomTextInputView}>
                    <TextInput style={[styles.textInputNumber, Platform.OS == 'android' ? { paddingBottom: 10 / 667 * height } : null]}
                        keyboardType='numeric' maxLength={10} underlineColorAndroid='transparent'
                        onChangeText={(mobileNumber) => this.getMobileNumber(mobileNumber)} 
                    />
                </View>
            </View>
        )
    }
}


const styles = {
    btnStyle: {
      height: 50 / 667 * height,
      width: 50 / 375 * width,
      paddingLeft: 5 / 375 * width,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'white',
      fontSize: 18,
      fontFamily: 'Lato-Bold',
      left: -20
    },
    bottomTextInputView: {
      height: 50 / 667 * height,
      width: 200 / 375 * width,
      borderColor: 'white',
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      position: 'absolute',
    },
    textInputNumber: {
      height: 50 / 667 * height,
      marginLeft: 36 / 375 * width,
      fontSize: 20,
      fontFamily: 'Lato-Regular',
      color: 'white'
    },
};

export { TextBoxLoginScreenComponent }