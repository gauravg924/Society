import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView, StatusBar, Keyboard, ActivityIndicator, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');

class ButtonLoginScreenComponent extends Component {
    constructor(props) {
        super();
        
      }
      
    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.screenName == 'login' ? this.props.loginButtonClicked(true) : this.props.otpButtonClicked(true)} >
                {!this.props.loader
                    ?
                    <View style={styles.buttonViewStyle}>
                        <Icon name="long-arrow-right" size={45} color='#7e7e7e' />
                    </View>
                    : <ActivityIndicator style={styles.loaderStyle} size="large" color="#0000ff" />
                }
            </TouchableOpacity>
        )
    }
}

const styles = {
    buttonStyle: {
        marginTop: (30 / 667) * height,
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      buttonViewStyle: {
        borderWidth: 1,
        borderColor: '#939393',
        borderRadius: 30,
        height: 45 / 667 * height,
        width: 80 / 375 * width,
        justifyContent: 'center',
        alignItems: 'center'
      },
      loaderStyle: {
        height: 45 / 667 * height,
        width: 80 / 375 * width,
        justifyContent: 'center',
        alignItems: 'center'
      },
}

export { ButtonLoginScreenComponent }