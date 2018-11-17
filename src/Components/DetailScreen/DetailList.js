import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuProvider } from 'react-native-popup-menu';
import { HeaderComponent } from '../Common/HeaderComponent';
import { DetailItem } from './DetailItem';
import Dimensions from 'Dimensions';
import { Header } from 'native-base';

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
      // <MenuProvider>
      //   <HeaderComponent />
      //   <View style={{ flex: 1, backgroundColor: '#fff' }}>
      //     <View style={{ backgroundColor: '#00AB71', flexDirection: 'row', padding: 3 / 667 * height }}>
      //       <Text style={styles.monthTitle}>THIS MONTH</Text>
      //       <Text style={styles.monthlyAmount}>z -$8,326.00</Text>
      //     </View>
      //     <View style={styles.weekContainer}>
      //       <View style={styles.weekBalance}>
      //         <Text style={styles.weekTitle}>WEEK 46</Text>
      //         <Text style={styles.weeklyAmount}>Balance $ 42,302.50</Text>
      //       </View>
      //       <Text style={styles.totalWeekAmount}>z -$8,326.00</Text>
      //     </View>
      //     <View style={{ flex: 1 }}>
      //       <FlatList
      //         data={this.state.bestData}
      //         renderItem={({ item, index }) => (
      //           <DetailItem
      //             index={index}
      //             data={item}
      //           />
      //         )
      //         }
      //       />
      //     </View>
      //   </View>
      // </MenuProvider>
      <MenuProvider>
        <HeaderComponent />
      <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text style={{flex: .3, paddingLeft: 20/365*width, fontSize: 15}}> Existing </Text>
            <TextInput style={styles.view5} underlineColorAndroid='transparent' editable={false} placeholder='Existing'  />
          </View>
          <View style={styles.view4}>
            <Text style={{flex: .3, paddingLeft: 20/365*width, fontSize: 15}}> New </Text>
            <TextInput style={styles.view5} underlineColorAndroid='transparent' keyboardType={'numeric'} maxLength={2} placeholder = 'New'/>
          </View>
          <View style={[styles.view4, {flex: .5}]}>
            <Text style={{flex: .3, paddingLeft: 20/365*width, fontSize: 15}}> Remarks </Text>
            <TextInput style={styles.view6} numberOfLines = {5} multiline = {true} underlineColorAndroid='transparent' placeholder = 'Remarks'/>
          </View>
        </View>
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
    color: '#FFF',
    fontSize: 14,
    flex: 0.7,
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
  },

  view1: {
    flex: 1,
    backgroundColor: '#ededed'
  },
  view2: { 
    backgroundColor: '#fff', 
    flex: .5 
  },
  view3: {
    margin: 10,
    marginTop: 15/667*height,
    flex: .8,
    flexDirection: 'column',
    backgroundColor: '#ededed',           //'#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    //backgroundColor: '#fff8f7'
  },
  view4: {
    flex: .2,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'red',
    marginTop: 20 / 667 * height
  },
  view5: { 
    flex: .6, 
    backgroundColor: '#fff', 
    borderWidth: 1,
    fontSize: 15,
    height: 40/667*height,
    textAlign: 'center',
    borderColor: '#BDBDBD',

  },
  view6: { 
    flex: .6, 
    backgroundColor: '#fff', 
    borderWidth: 1,
    fontSize: 15,
    // height: 40/667*height,
    textAlign: 'center',
    borderColor: '#BDBDBD',
    

  },
  
});

export { DetailList }

