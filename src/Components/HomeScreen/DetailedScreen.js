import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuProvider} from 'react-native-popup-menu';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { HeaderComponent, TableExpandableView } from '../Common';

class DetailedScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super();
        this.state = {
            types: ['Loan', 'Fund', 'FD', 'RD', 'Interest'],
            detailedView: [false, false, false, false, false]
        }
    }

    expandView(type) {
        let changedValue = !this.state.detailedView[type];      // saving the value of tapped view coz it would be lost in next step
        this.state.detailedView = [false, false, false, false, false];     // all expandables are closed now
        this.state.detailedView[type] = changedValue;     // changing the value of selected index by the saved value
        this.setState({detailedView: this.state.detailedView})   // saving state
    }


    render() {
        return (
            <MenuProvider>
                <ScrollView style={styles.mainView}>
                    <HeaderComponent />
                    {this.state.types.map((value, index) => {
                        return (
                            <View>
                                <View key={index} style={[styles.cardLike, this.state.detailedView[index] ? { height: 300 / 667 * height } : { height: 50 / 667 * height }]}>
                                    <TouchableOpacity onPress={() => this.expandView(index)}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ marginLeft: 10 / 375 * width, fontSize: 20, fontFamily: 'Lato-Regular' }}> {value} </Text>
                                            <Icon style={{ marginRight: 10 / 375 * width }} name={!this.state.detailedView[index] ? 'ios-arrow-dropright' : 'ios-arrow-dropdown'} size={30} color='black' />
                                        </View>
                                    </TouchableOpacity>
                                    {this.state.detailedView[index] ? <TableExpandableView /> : null}
                                </View>
                                {/*{index != 4 ? <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10/667*height}}>
                                    <View style={{width: 60/375*width, borderWidth: 2, borderColor: '#2f558e'}} />
                                <Text> {this.state.types[index+1]} </Text>  
                                </View>: null }*/}
                            </View>
                            )
                    })}
                </ScrollView>
            </MenuProvider>
        )
    }
}

const styles = {
    mainView: {
        flex: 1,
        backgroundColor: '#dbdbdb',
    },
    cardLike: {
        marginTop: 10 / 667 * height,
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
        paddingBottom: 10,
    },
}

export { DetailedScreen }


