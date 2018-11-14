import React, { Component } from 'react';
import { TouchableOpacity, Platform, Text, View, Image } from 'react-native';
import { Header, Title, Left, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');

class HeaderComponent extends Component {
    render() {
        return (
        <Header iosBarStyle='light-content' androidStatusBarColor= "#ff6830"   style={{ backgroundColor: '#ff6830' }}>
                <Left>
                    <Button transparent>
                    <Image style={{height: 50/667*height, width: 50/375*width}} resizeMode = 'contain' source={require("C:/Users/hp/Desktop/Uiic/assets/images/uiic.png")} />
                    </Button>
                </Left>
                <Title style={Platform.OS == 'ios' ? { color: 'white', paddingTop: 15 } : { color: 'white', paddingTop: 15, paddingLeft: 90 / 375 * width }}> Society </Title>
                <Right>
                    <Menu>
                        <MenuTrigger>
                            <View style={{height: 40/667*height, width: 40/375*width, paddingTop: 2/667*height}}>
                            <Icon name='md-more' size={30} color='white' style={popupMenu.icon} />
                            </View>
                        </MenuTrigger>
                        <MenuOptions customStyles={popupMenu}>
                            <MenuOption>
                                <Text style={popupMenu.option}>Contact Us</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </Right>
            </Header>
        )
    }
}

const popupMenu = {
    icon: { 
       // paddingTop: 10 / 667 * height, 
        marginLeft: 20 / 375 * width 
    },
    option: {
        paddingTop: 5 / 667 * height,
        paddingLeft: 10 / 375 * width, fontSize: 16,
        color: 'black'
    }
}




export { HeaderComponent };