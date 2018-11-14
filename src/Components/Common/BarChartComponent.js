import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');

class BarChartComponent extends Component {
    render() {
        const data1 = [50, 50, 40, 95, 65]
        const data2 = [30, 40, 30, 80, 60]
        const data3 = ['Loan', 'Fund', 'FD', 'RD', 'Interest']
        const barData = [
            {
                data: data1,
                svg: { fill: '#f06485' },
                type: 'Recovered'
            },
            {
                data: data2,
                svg: { fill: '#7ef165' },
                type: 'Payment'
            },
        ]
        return (
            <View style={[styles.cardLike, { marginTop: 10 / 667 * height, height: 400 / 667 * height, marginBottom: 20 / 667 * height }]}>
                <View style={styles.chartAlignment}>
                {barData.map((data, index) => {
                    return (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: data.svg.fill, height: 10 / 667 * height, width: 10 / 375 * width }} />
                            <Text> {data.type} </Text>
                        </View>
                    )
                })
                }
                </View>
                <BarChart style={{ marginTop: 40 / 667 * height, height: 270 / 667 * height }} data={barData} gridMin={0} />
                {/*<XAxis style={{ marginTop: 10 }} data={data3} scale={scale.scaleBand} formatLabel={(value) => value} labelStyle={{ color: 'black' }} />*/}
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    {data3.map((value, index) => {
                        return(
                            <Text> {value} </Text>
                        )
                    })}
                </View>
            </View>
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
     chartAlignment: {
        flexDirection: 'column',
        marginLeft: 25 / 375 * width
    }
}

export {BarChartComponent}
