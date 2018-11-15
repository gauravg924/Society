import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuProvider } from 'react-native-popup-menu';
import { HeaderComponent } from '../Common/HeaderComponent';
import { DetailItem } from './DetailItem';
import Dimensions from 'Dimensions';

var { height, width } = Dimensions.get('window');

class DetailList extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      bestData: [
        {
          date: 'Jan-17-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-18-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-19-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-20-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-21-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            },
            {
              title: 'Interest',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-22-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            },
            {
              title: 'Loan',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-22-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            },
            {
              title: 'Loan',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-22-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            },
            {
              title: 'Loan',
              value: '$ 4566678',
            }
          ]
        },
        {
          date: 'Jan-22-2018',
          result: [
            {
              title: 'Credit',
              value: '$ 4566678',
            },
            {
              title: 'Debit',
              value: '$ 4566678',
            },
            {
              title: 'Loan',
              value: '$ 4566678',
            }
          ]
        }
      ],
      showAmount: false
    }
  }

  render() {
    return (
      <MenuProvider>
        <HeaderComponent />
        <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#3CB371', flexDirection: 'row', padding: 3/667*height }}>
          <Text style={styles.monthTitle}>THIS MONTH</Text>
          <Text style={styles.monthlyAmount}>z -$8,326.00</Text>
        </View>
        <View style={styles.weekContainer}>
          <View style={styles.weekBalance}>
            <Text style={styles.weekTitle}>WEEK 46</Text>
            <Text style={styles.weeklyAmount}>Balance $ 42,302.50</Text>
          </View>
          <Text style={styles.totalWeekAmount}>z -$8,326.00</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.bestData}
            renderItem={({ item, index }) => (
              <DetailItem
                index={index}
                data={item}
              />
            )
            }
          />
          </View>
        </View>
        </MenuProvider>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3CB371'
  },
  monthTitle: {
    color: '#fff',
    fontSize: 14,
    flex: 0.7,
    fontWeight: 'bold',
    marginLeft: 10
  },
  monthlyAmount: {
    color: '#fff',
    fontSize: 15,
    flex: 0.3,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 8
  },
  weekContainer: {
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    padding: 8
  },
  weekBalance: {
    flexDirection: 'column',
    flex: 0.7
  },
  weekTitle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 8
  },
  weeklyAmount: {
    color: '#808080',
    fontSize: 12,
    marginLeft: 8,
    marginRight: 8
  },
  totalWeekAmount: {
    color: '#000',
    fontSize: 13,
    flex: 0.3,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 8
  }
});

export { DetailList }

