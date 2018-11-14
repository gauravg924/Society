import React, { Component } from 'react';
import { Image, View, BackHandler, Platform, Alert, TouchableWithoutFeedback, Modal, Animated, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Text, Button, Footer, FooterTab, Header, Left, Body, Icon, Title, Right } from 'native-base';
import Dimensions from 'Dimensions';
import { LoginScreen, OtpScreen } from '../Registeration';
import { HomeScreen, DetailedScreen, AccountScreen } from '../HomeScreen';

var { height, width } = Dimensions.get('window');
var _ = require('lodash');


class FooterGrid extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super();
        this.state = {
            index: 2,
            tab1: true,
            tab2: false,
            tab3: false,
        }

    }


    toggleTab1(tabNumber) {
        this.setState({
            index: tabNumber,
            tab1: true,
            tab2: false,
            tab3: false,
        });
    }

    toggleTab2(tabNumber) {
        this.setState({
            index: tabNumber,
            tab1: false,
            tab2: true,
            tab3: false,
        });
    }

    toggleTab3(tabNumber) {
        this.setState({
            index: tabNumber,
            tab1: false,
            tab2: false,
            tab3: true,
        });
    }



    render() {
        let AppComponent = HomeScreen;

        if (this.state.index == 1) {
            AppComponent = HomeScreen
        }
        else if (this.state.index == 2) {
            AppComponent = HomeScreen
        }
        else if (this.state.index == 3) {
            AppComponent = AccountScreen
        }
        return (
            <Container style={{ flex: 1 }} >
                <AppComponent navigation={this.props.navigation} />

                <Footer style={styles.footerStyle} >
                    <FooterTab style={styles.container}>
                        <Button onPress={() => this.toggleTab1(1)}>
                            {this.state.tab1 && <Image source={require('../../../assets/icons/homeSelected.png')} />}
                            {!this.state.tab1 && <Image source={require('../../../assets/icons/homeUnselected.png')} />}
                        </Button>
                        <Button onPress={() => this.toggleTab2(2)}>
                            {this.state.tab2 && <Image source={require('../../../assets/icons/tagSelected.png')} />}
                            {!this.state.tab2 && <Image source={require('../../../assets/icons/tagUnselected.png')} />}
                        </Button>
                        <Button onPress={() => this.toggleTab3(3)}>
                            {this.state.tab3 && <Image source={require('../../../assets/icons/profileSelected.png')} />}
                            {!this.state.tab3 && <Image source={require('../../../assets/icons/profileUnselected.png')} />}
                        </Button>
                    </FooterTab>
                </Footer>
                
            </Container>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'black',
    },
    tabLineWrapStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: 8,
        left: 0,
        width: '100%',
        zIndex: 1
    },
    tabLineStyle: {
        width: (100 / 375) * width,
        height: (5 / 667) * height,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    footerStyle: {
        backgroundColor: 'black',
        height: (60 / 667) * height
    },
}

export default FooterGrid;














