import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView, StatusBar, Keyboard, ActivityIndicator, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Snackbar from 'react-native-snackbar';
import LinearGradient from 'react-native-linear-gradient';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');
import { TextBoxLoginScreenComponent, ButtonLoginScreenComponent, OtpScreen } from './index';
import APIFetch from '../../Config/APIFetch';
import uiic from '../../../assets/images/uiic1.png'
import { Container, Header, Content, Form, Item, Input, Label, Footer } from 'native-base';


class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super();
    this.state = {
      mobileNumber: '',    // mobile number
      otpScreen: false,    // show otp screen
      loader: false        // loader
    }
  }

  getMobileNumber = (mobileNumber) => {
    this.setState({ mobileNumber: mobileNumber })
  }

  registerMobileNumber = () => {
    this.setState({ loader: true })  // to show loader
    Keyboard.dismiss();
    APIFetch.apiFetch('numberRegisteration', 'POST', { "mobileNumber": this.state.mobileNumber }, function (error, results) {
      if (error) {
        this.setState({ loader: false })      // remove loader
        Snackbar.show({ title: "Something went wrong", duration: Snackbar.LENGTH_LONG })
      } else {
        if (results.data.data) {
          this.setState({ otpScreen: true })      // show screen
        } else {
          this.setState({ loader: false })      // remove loader
          Snackbar.show({ title: "Number not registered with us", duration: Snackbar.LENGTH_LONG })
        }
      }
    }.bind(this))
  }

  // ['#ff7f66', '#f2a393', '#ff7f66']  ORIGINAL COLORS
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#00AC72" barStyle="light-content" />
        {/* <LinearGradient colors={['#00AC72',  '#00AC72', '#00AC72']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} locations={[0.1, .5, 1]} style={styles.linearGradient} >
          {!this.state.otpScreen ?
            <View style={styles.mainView}>
              
             
              <Image style={{height: 150/667*height, width: 150/375*width, marginTop: 50/667*height}} resizeMode = 'contain' source={uiic} />
                    
              <View style={styles.textBox}>
                <Text style={styles.message1} numberOfLines={1}> We need to text you the OTP to </Text>
                <Text style={styles.message2}> authenticate your account </Text>
              </View>
              <Text style={styles.message1} > Please enter your mobile number </Text>
              
              <View style={styles.textInputBox}>
                <TextBoxLoginScreenComponent getMobileNumber={this.getMobileNumber}/>
              </View>

              <ButtonLoginScreenComponent screenName={'login'} loader={this.state.loader} loginButtonClicked={this.registerMobileNumber}/>
              
              </View>
            : <OtpScreen navigation={this.props.navigation} mobileNumber={this.state.mobileNumber} />
          }
        </LinearGradient> */}

        <View style={{ flex: 0.4, backgroundColor: '#00AC72', justifyContent: 'center' }}>
        
          <LinearGradient colors={['#00AC72', '#00AC72', '#8FBC8F']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} locations={[0.1, .5, 1]} style={styles.linearGradient} >
            <Image style={{ height: 150 / 867 * height, width: 150 / 175 * width, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} resizeMode='contain' source={uiic} />
          </LinearGradient>
        </View>
        <View style={{ flex: 0.6, backgroundColor: '#fff', marginLeft: 16, marginRight: 16 }}>
          {/* <Form>
            <Item floatingLabel>
              <Label>INDIA(+91)</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Your Phone Number</Label>
              <Input />
            </Item>
          </Form> */}
           <View style={styles.textInputBox}>
                <TextBoxLoginScreenComponent getMobileNumber={this.getMobileNumber}/>
              </View>

          <View style={{ marginTop: 9, alignItems: 'center' }}>
            <Text style={styles.message1} numberOfLines={1}> We need to text you the OTP to </Text>
            <Text style={styles.message2}> authenticate your account </Text>
            {/* <Icon name='chevron-circle-right' size={51} color='#00AC72' style={{ marginTop: 16 }} /> */}

          </View>
          <ButtonLoginScreenComponent screenName={'login'} loader={this.state.loader} loginButtonClicked={this.registerMobileNumber} />

        </View>
        {/* <Footer style = {{height: 20, backgroundColor: '#00AC72'}}>
          <Text style = {{color: '#fff', fontSize: 12, alignSelf: 'center'}}>Copy Right By United India @2018</Text>
        </Footer> */}

      </View>
    );
  }
}


const styles = {
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center'
    // borderRadius: 5
  },
  icon: {
    marginTop: 90 / 667 * height
  },
  textBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  message1: {
    marginTop: 20 / 667 * height,
    color: '#696969',
    // fontFamily: 'Lato-Bold',
    fontSize: 16,
    alignSelf: 'center'
  },
  message2: {
    marginTop: 5 / 667 * height,
    color: '#696969',
    // fontFamily: 'Lato-Bold',
    fontSize: 16,
    alignSelf: 'center'
  },

  textInputBox: {
    marginTop: 30 / 667 * height,
     marginRight: 130 / 375 * width,
     justifyContent: 'center',
     alignItems: 'center',
   alignSelf: 'center'
  },
};

export { LoginScreen }
