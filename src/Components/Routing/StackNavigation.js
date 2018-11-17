import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator, Image, NetInfo, Platform, StatusBar } from 'react-native';
import Dimensions from 'Dimensions';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { LoginScreen, OtpScreen } from '../Registeration';
import { Dashboard } from '../HomeScreen';
import { DetailList } from '../DetailScreen';
const { width, height } = Dimensions.get('window');

class StackNavigation extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            loginId: 1
        }
        console.disableYellowBox = true;
    }
    static navigationOptions = {
        header: null,
    }

    componentWillMount() {
        StatusBar.setHidden(false)
        AsyncStorage.getItem('loginId', function (error, results) {
            if (error) {
                console.log("error in fetching loginId: " + error)
            } else {
                this.setState({loginId: results})
            }
        }.bind(this));
    }


    render() {
        //stack navigator to navigate b/w screens
        const LoginNavigator = StackNavigator({
            LoginScreen: { screen: LoginScreen },
            Dashboard: { screen: Dashboard },
            DetailList: { screen: DetailList },
            OtpScreen: {screen: OtpScreen}
        },
            {
                //initialRouteName: this.state.loginId ? 'Dashboard': 'LoginScreen'
                initialRouteName: 'OtpScreen'
            }
        )
        return (
            <View style={{ flex: 1 }}>
                <LoginNavigator />
            </View>
        )

    }
}

export default StackNavigation;