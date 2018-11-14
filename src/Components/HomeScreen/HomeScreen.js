import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { MenuProvider } from 'react-native-popup-menu';
import * as scale from 'd3-scale'
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');
import { HeaderComponent, PieChartComponent, BarChartComponent } from '../Common';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp()
        });
    }


    render() {


        return (
            <MenuProvider>
                <View style={{ flex: 1, backgroundColor: '#dbdbdb' }}>
                    <HeaderComponent />
                    <ScrollView>
                        <View style={[ { backgroundColor: 'white', height: 160 / 667 * height, paddingLeft: 12/375 * width, paddingRight: 12/375*width }]}>
                            <View style={{ flexDirection: 'row', marginTop: (15 / 667) * height, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: 'black' }}> Welcome </Text>
                                    <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold', color: 'black', marginTop: 3 / 667 * height }}> Devanshu Jain </Text>
                                </View>
                                <View style={{ height: (50 / 667) * height, width: (50 / 375) * width, borderRadius: 50, backgroundColor: '#7496e8', alignItems: 'center', justifyContent: 'center', marginRight: (20 / 375) * width }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'lato-bold', paddingLeft: 3 }}> D </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 15/667*height, borderWidth: .2, borderColor: 'black' }} />

                            <View style={{ flexDirection: 'column', marginTop: 10/667*height}}>
                                <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: 'black' }}> Net Amount </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 / 667 * height }}>
                                    <Text style={{ fontSize: 25, fontFamily: 'Lato-Bold', color: 'black'}}> 40,000 </Text>
                                    <Text style={{ fontSize: 18, fontFamily: 'Lato-Bold', color: 'black', marginTop: 6/375*width }}> INR </Text>
                                </View>
                            </View>
                        </View>
                        <PieChartComponent />
                        <BarChartComponent />
                    </ScrollView>
                </View>
            </MenuProvider>
        )
    }
}

const styles = {
    cardLike: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    depositedStyle: {
        marginLeft: 20 / 375 * width,
        fontSize: 15,
        fontFamily: 'lato-regular',
        fontWeight: '500'
    },
    receivedStyle: {
        marginLeft: 20 / 375 * width,
        fontSize: 15,
        fontFamily: 'lato-regular',
        fontWeight: '300'
    }
}

export { HomeScreen }
