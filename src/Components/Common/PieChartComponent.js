import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');

class PieChartComponent extends Component {
    render() {
        const pieChartData = [
            {
                key: 1,
                amount: 50,
                type: 'Loan',
                svg: { fill: '#c48a1f' },
            },
            {
                key: 2,
                amount: 50,
                type: 'Fund',
                svg: { fill: '#1fc4c4' }
            },
            {
                key: 3,
                amount: 40,
                type: 'FD',
                svg: { fill: '#65bcf2' }
            },
            {
                key: 4,
                amount: 295,
                type: 'RD',
                svg: { fill: '#7ef165' }
            },
            {
                key: 5,
                amount: 325,
                type: 'Interest',
                svg: { fill: '#f06485' }
            }
        ]
        return (
            <View style={[styles.cardLike, { marginTop: 10 / 667 * height, height: 310 / 667 * height }]}>
                <PieChart style={{ height: 200/667*height }} valueAccessor={({ item }) => item.amount} data={pieChartData} outerRadius={'95%'} innerRadius={'55%'} />


                <View style={styles.chartAlignment}>
                    {pieChartData.map((data, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ backgroundColor: data.svg.fill, height: 10 / 667 * height, width: 10 / 375 * width }} />
                                <Text> {data.type} </Text>
                            </View>
                        )
                    })
                    }

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
        marginLeft: 280 / 375 * width
    }
}

export {PieChartComponent}