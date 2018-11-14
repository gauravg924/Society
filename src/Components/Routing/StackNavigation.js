import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator, Image, NetInfo, Platform, StatusBar } from 'react-native';
import Dimensions from 'Dimensions';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FooterGrid from '../Footer/FooterGrid';
import { LoginScreen } from '../Registeration';
import { HomeScreen, DetailedScreen, Dashboard } from '../HomeScreen';
import { TableComponent } from '../Table';
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
            FooterGrid: { screen: FooterGrid },
            HomeScreen: { screen: HomeScreen },
            DetailedScreen: { screen: DetailedScreen },
            Dashboard: { screen: Dashboard },
            TableComponent: { screen: TableComponent }
        },
            {
                //initialRouteName: this.state.loginId ? 'Dashboard': 'LoginScreen'
                initialRouteName: 'LoginScreen'
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