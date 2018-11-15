import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';

var { height, width } = Dimensions.get('window');

class DetailItem extends Component {
    /*
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    {this.props.index <= 3 &&
                        <Icon name='plus-circle' size={40} color='#FF4500' style={styles.icon} />
                    }
                    {this.props.index > 3 &&
                        <Icon name='plus-circle' size={40} color='#FFA500' style={styles.icon} />
                    }
                    <View style={styles.innerContainer}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>Date</Text>
                            <Text style={styles.dateValue}>{this.props.data.date}</Text>
                        </View>
                        {this.props.data && this.props.data.result.map((e, i) => {
                            return (
                                <View style={styles.detailContainer}>
                                    <Text style={styles.title}>{e.title}</Text>
                                    <Text style={styles.value}>{e.value}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
        )
    }
    */

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{flex: .15}}>
                        <Icon name='plus-circle' size={30} color='#FF4500' style={styles.icon} />
                    </View>

                    <View style={{flex: .65, flexDirection: 'column'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}> Jan - 18 </Text>
                        <Text> Debit </Text>
                        <Text> Credit </Text>
                    </View>

                    <View style={{flex: .20, paddingLeft: 10}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}> </Text>
                        <Text> Debit </Text>
                        <Text> Credit </Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 2.5/365*width,
        borderColor: '#000',
        borderBottomWidth: 0.6,
        borderRadius: 0
    },
    icon: {
        margin: 10,
    },
    innerContainer: {
        flexDirection: 'column',
        flex: 1
    },
    dateContainer: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 13,
        marginTop: 4
    },
    date: {
        flex: 0.5,
        color: '#000',
        fontSize: 16
    },
    dateValue: {
        flex: 0.5,
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontSize: 15,
        color: '#FF4500'
    },
    detailContainer: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 13,
        marginTop: 4
    },
    title: {
        color: '#808080',
        fontSize: 15,
        flex: 0.5,
        fontStyle: 'italic'
    },
    value: {
        flex: 0.5,
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontSize: 14,
        color: '#808080'
    },

});

export { DetailItem }