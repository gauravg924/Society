import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, BackHandler, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');

class WelcomeComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            image: null
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp()
        });
    }

    openGallery() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ image: image.path })
        });
    }



    render() {
        return (
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <TouchableOpacity style={styles.view4} onPress={this.openGallery.bind(this)}>
                            {this.state.image
                                ? <Image style={{ height: 100 / 667 * height, width: 100 / 375 * width, borderRadius: 50 }} source={{ uri: this.state.image }} />
                                : <Icon name='ios-camera' size={43} color= '#696969'             // '#FF4500' 
                                />
                            }
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            {/* <Text style={{ fontSize: 16, color: '#000' }}>Good Afternoon</Text> */}
                            <Text style={{ fontSize: 17, color: '#696969', fontWeight: 'bold', marginTop:8 }}>Devanshu Jain</Text>
                            <Text style={{ fontSize: 13, color: '#696969' }}>Software Engineer</Text>
                            <Text style={{ fontSize: 13, color: '#696969' }}>United India Noida</Text>
                            <Text style={{ fontSize: 12, alignSelf: 'center',fontStyle: 'italic', color: '#696969', marginLeft:12, marginTop: 14 }}>Database updated upto: 20/20/2020</Text>

                        
                        </View>
                    </View>
                </View>


            </View>
        )
    }

}

const styles = {
    view1: {
        flex: 0.30, padding: 10
    },
    view2: {
        flex: 1,
        flexDirection: 'row',
         backgroundColor: '#fff8f7',           //'#fff',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 15, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        // backgroundColor: '#fff8f7'
    },
    view3: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
       
        //  backgroundColor: '#587498'
        //marginTop: 30 / 1067 * height 
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100 / 420 * width,
        height: 100 / 730 * height,
        marginLeft: 10,
        // marginRight: 50 / 375 * width,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: '#a9a9a9',      //'#FF4500',
        backgroundColor: '#DCDCDC'
    }
}

export { WelcomeComponent }
