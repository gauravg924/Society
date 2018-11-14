import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {HeaderComponent} from '../Common';


class AccountScreen extends Component {
    render() {
        return (
            <MenuProvider>
            <View style={styles.mainView}>
                <HeaderComponent />
                <View style={styles.content}>
                    <Text> Personal Details </Text>
                </View>
            </View>
            </MenuProvider>
        )
    }
}

const styles = {
    mainView: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { AccountScreen }