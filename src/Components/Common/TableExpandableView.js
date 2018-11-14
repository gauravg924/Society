import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class TableExpandableView extends Component {
    constructor(props) {
        super();
        this.state = {
            tableHead: ['Date', 'Recovered', 'Payment'],
            tableData: [
                ['1/1/12', '1000', '-'],
                ['13/2/12', '1', '2'],
                ['19/3/12', '1', '2'],
                ['24/4/12', '-' , '2'],
                ['31/5/12', '1', '2'],
            ],
            tableSum: ['', 'Total X', 'Total Y']
        }
    }
    render() {
        return (
            <View style={{ marginTop: 20 / 667 * height }}>
                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <Row data={this.state.tableHead} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
                    <Rows data={this.state.tableData} style={styles.tableData} textStyle={styles.tableDataText} />
                    <Row data={this.state.tableSum} style={styles.tableSum} textStyle={styles.tableSumText} />
                </Table>
            </View>
        )
    }
}   

const styles = {
    tableHeader: {
        backgroundColor: 'white',
        height: 40 / 667 * height,
    },
    tableHeaderText: {
        paddingTop: 3 / 667 * height,
        paddingLeft: 23 / 375 * width,
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Lato-Bold'
    },
    tableData: {
        backgroundColor: 'white',
        height: 30 / 667 * height,
    },
    tableDataText: {
        paddingTop: 3 / 667 * height,
        paddingLeft: 27 / 375 * width,
        color: 'red',
        fontWeight: '600'
    },
    tableSum: {
        backgroundColor: 'white',
        height: 40 / 667 * height,
    },
    tableSumText: {
        paddingTop: 3 / 667 * height,
        paddingLeft: 27 / 375 * width,
        color: 'green',
        fontWeight: '600'
    }
}

export {TableExpandableView}