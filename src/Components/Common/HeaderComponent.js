import React, { Component } from 'react';
import { TouchableOpacity, Platform, Text, View, Image, StatusBar } from 'react-native';
import { Header, Title, Left, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import uiic from '../../../assets/images/uiic1.png'

import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');

class HeaderComponent extends Component {

    // render() {
    //     return (
    //     <Header iosBarStyle='light-content' androidStatusBarColor= "#ff6830"   style={{ backgroundColor: '#ff6830' }}>
    //             <Left>
    //                 <Button transparent>
    //                 <Image style={{height: 50/667*height, width: 50/375*width}} resizeMode = 'contain' source={require("C:/Users/hp/Desktop/Uiic/assets/images/uiic.png")} />
    //                 </Button>
    //             </Left>
    //             <Title style={Platform.OS == 'ios' ? { color: 'white', paddingTop: 15 } : { color: 'white', paddingTop: 15, paddingLeft: 90 / 375 * width }}> Society </Title>
    //             <Right>
    //                 <Menu>
    //                     <MenuTrigger>
    //                         <View style={{height: 40/667*height, width: 40/375*width, paddingTop: 2/667*height}}>
    //                         <Icon name='md-more' size={30} color='white' style={popupMenu.icon} />
    //                         </View>
    //                     </MenuTrigger>
    //                     <MenuOptions customStyles={popupMenu}>
    //                         <MenuOption>
    //                             <Text style={popupMenu.option}>Contact Us</Text>
    //                         </MenuOption>
    //                     </MenuOptions>
    //                 </Menu>
    //             </Right>
    //         </Header>
    //     )
    // }



    render() {
        return (
            <View style={styles.headerView}>
                <StatusBar backgroundColor="#00AC72" barStyle="light-content" />

                <View>
                  <Image style={styles.headerLeftIconView} resizeMode='contain' source={uiic} />
                </View>

                <View style={styles.headerCenterTextView}>
                    <Text style={styles.textStyle}> Society </Text>
                </View>

                <View style={styles.headerRightIconView}>
                    <Menu>
                        <MenuTrigger>
                            <View>
                                <Icon name='md-more' size={38} color='white' />
                            </View>
                        </MenuTrigger>
                        <MenuOptions customStyles={popupMenu}>
                            <MenuOption>
                                <Text style={popupMenu.option}>Contact Us</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
            </View>
        )
    }

}

const styles = {
    headerView: {
        height: 70 / 667 * height,
        backgroundColor: '#00AC72', //'#ff6830',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15 / 667 * height
    },
    headerLeftIconView: {
        height: 50 / 667 * height,
        width: 60 / 375 * width
    },
    headerCenterTextView: {
        paddingTop: 15 / 667 * height,
        alignSelf: 'center',
        paddingRight: 20 / 375 * width
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    },
    headerRightIconView: {
        paddingTop: 6 / 667 * height,
        paddingRight: 10 / 375 * width
    }
}

const popupMenu = {
    icon: {
        // paddingTop: 10 / 667 * height, 
        //marginLeft: 20 / 375 * width
    },
    option: {
        paddingTop: 5 / 667 * height,
        paddingLeft: 10 / 375 * width, fontSize: 16,
        color: 'black'
    }
}

export { HeaderComponent };