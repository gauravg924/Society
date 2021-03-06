import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ripple from 'react-native-material-ripple';
import { MenuProvider } from 'react-native-popup-menu';
import { HeaderComponent } from '../Common/index';
import { WelcomeComponent } from './WelcomeComponent';
require('../../GlobalVariables/Variables');

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

// let deviceWidth1 = Dimensions.get('screen').width
// let deviceHeight1 = Dimensions.get('screen').height

export class Dashboard extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props)

    }
    // MOTO 360-640
    renderRowItem = (itemOptions) => {
        return (
            <View>
                <Ripple onPress={() => this.props.navigation.navigate('DetailList')}>
                    <View style={styles.cellStyle} >
                        <Icon name={itemOptions.icon} size={36} color='#00AC72'             // '#FF4500' 
                        />
                        <Text style={{ fontSize: 14, color: '#696969', marginTop: 10, fontFamily: 'serif' }}>
                            {itemOptions.title}
                        </Text>
                    </View>
                </Ripple>
            </View>
        );
    }


    render() {
        console.log(Dimensions.get('screen').width + "-=" + Dimensions.get('screen').height)
        return (
            <MenuProvider>
                <HeaderComponent />
                <View style={styles.container}>
                    <WelcomeComponent />
                    <View style={styles.flatListStyle}>
                        <FlatList
                            data={dashBoardOptions}
                            showsVerticalScrollIndicator={false}
                            numColumns={3}
                            renderItem={({ item }) => this.renderRowItem(item)}
                            keyExtractor={item => item.title}
                        />
                    </View>
                </View>
            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#c3c3e5'
        //backgroundColor: '#2F4F4F'
    },
    flatListStyle: {
        flex: 0.70,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        //backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 15, height: 8},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 13,
        backgroundColor: '#fff8f7'
    },
    cellStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth / 3.15,
        height: deviceHeight / 5,
        borderRadius: 0,
        borderWidth: 1,
        borderBottomColor: '#D3D3D3',
        borderRightColor: '#D3D3D3',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#fff',
        flexDirection: 'column',
        backgroundColor: '#fff8f7',
        
    },
});
