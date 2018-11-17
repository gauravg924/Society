import React, { Component } from 'react';
import { View, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, Keyboard, Text, BackHandler, Image } from 'react-native';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');
import Snackbar from 'react-native-snackbar';
import { ButtonLoginScreenComponent } from './ButtonLoginScreenComponent';
import uiic from '../../../assets/images/uiic1.png'
import OtpInputs from 'react-native-otp-inputs'
import LinearGradient from 'react-native-linear-gradient';

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
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor="#00AC72" barStyle="light-content" />
                {/* <Image style={{ height: 150 / 667 * height, width: 150 / 375 * width, marginTop: 50 / 667 * height }} resizeMode='contain' source={uiic} />
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
                    */}


                <View style={{ flex: 0.4, backgroundColor: '#00AC72', justifyContent: 'center' }}>
                    <LinearGradient colors={['#00AC72', '#00AC72', '#8FBC8F']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} locations={[0.1, .5, 1]} style={styles.linearGradient} >
                        <Image style={{ height: 150 / 867 * height, width: 150 / 175 * width, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} resizeMode='contain' source={uiic} />
                    </LinearGradient>
                </View>
                <View style={{ flex: 0.6, backgroundColor: '#fff', marginLeft: 16, marginRight: 16 }}>

                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        {/* <TextInput style={styles.otpTextBox} keyboardType='numeric' onChangeText={(otp) => this.getOtp(otp)} maxLength={4} underlineColorAndroid='transparent' /> */}

                        <View style={{ alignItems: 'center', flex: 0.2, marginTop: 21}}>
                            <Text style={styles.message1} numberOfLines={1}> We have sent on OTP on 9530102998</Text>
                            {/* <Text style={styles.message2} numberOfLines={1}> 9530102998 </Text> */}
                            <Text style={styles.message2}> Please enter your OTP </Text>

                            {/* <ButtonLoginScreenComponent screenName={'login'} loader={this.state.loader} loginButtonClicked={this.registerMobileNumber} /> */}

                        </View>

                        <View style={{ flex: 0.2, alignItems: 'center' }}>
                            <OtpInputs handleChange={code => console.log(code)} numberOfInputs={4} inputContainerStyles={{ backgroundColor: '#8FBC8F' }} />
                        </View>
                        <View style={{ flex: 0.4, alignItems: 'center' }}>
                        <ButtonLoginScreenComponent screenName={'login'} loader={this.state.loader} loginButtonClicked={this.registerMobileNumber} />
                            </View>
                    </View>



                </View>
            </View>

        )
    }
}

const styles = {
    message1: {
        color: '#696969',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        // marginTop: 10
    },
    message2: {
        color: '#696969',
        fontFamily: 'Lato-Bold',
        fontSize: 18
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center'
        // borderRadius: 5
    },
    otpTextBox: {
        marginTop: 30 / 667 * height,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#939393',
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