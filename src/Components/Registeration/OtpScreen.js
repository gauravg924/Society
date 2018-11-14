import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, Keyboard, Text, BackHandler, Image } from 'react-native';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');
import Snackbar from 'react-native-snackbar';
import { ButtonLoginScreenComponent } from './ButtonLoginScreenComponent';

class OtpScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            otp: '',  // otp
            loader: false   // to show activity indicator
        }
    }
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
    }

    getOtp(otp) {
        this.setState({ otp: otp })   // getting the otp entered
    }

    verifyOtp = () => {
        Keyboard.dismiss();
        this.setState({ loader: true })
        if (this.state.otp == '1234') {
            AsyncStorage.setItem('loginId', '1');
            setTimeout(function () {
                this.props.navigation.navigate('Dashboard')
            }.bind(this), 2000)
        } else {
            this.setState({ loader: false })
            Snackbar.show({ title: 'Your OTP is not valid', duration: Snackbar.LENGTH_LONG })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{height: 150/667*height, width: 150/375*width, marginTop: 50/667*height}} resizeMode = 'contain' source={require("C:/Users/hp/Desktop/Uiic/assets/images/uiic.png")} />
                <Text style={styles.message1}>
                    Verifying your number!
                </Text>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={[styles.message2, { marginTop: 20 / 667 * height, alignSelf: 'flex-start' }]}> We have sent on OTP on </Text>
                    <Text style={[styles.message2, { marginTop: 2 / 667 * height }]}> +91 - {this.props.mobileNumber} </Text>
                </View>
                <Text style={[styles.message2, { marginTop: 15 / 667 * height }]}> Please enter your OTP </Text>
                <TextInput style={styles.otpTextBox} keyboardType='numeric' onChangeText={(otp) => this.getOtp(otp)} maxLength={4} underlineColorAndroid='transparent' />
                
                {!this.state.loader
                    ?
                    < ButtonLoginScreenComponent screenName={'otp'} loader={this.state.loader} otpButtonClicked={this.verifyOtp} />
                    :
                    <ActivityIndicator style={styles.buttonStyle} size="large" color="#0000ff" />
                }
            </View>

        )
    }
}

const styles = {
    message1: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 20
    },
    message2: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 18
    },
    otpTextBox: {
        marginTop: 30 / 667 * height,
        backgroundColor: 'white',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white',
        height: 50 / 667 * height,
        width: 100 / 375 * width,
        fontSize: 18,
        fontFamily: 'Lato-Regular',
    },
    buttonStyle: {
        marginTop: (30 / 667) * height,
    },
}

export { OtpScreen }