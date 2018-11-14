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
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 / 667 * height }}>
                        <TouchableOpacity style={styles.view4} onPress={this.openGallery.bind(this)}>
                            {this.state.image
                                ? <Image style={{ height: 100 / 667 * height, width: 100 / 375 * width, borderRadius: 50 }} source={{ uri: this.state.image }} />
                                : <Icon name='ios-camera' size={43} color='#FF4500' />
                            }
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 16, color: '#A9A9A9' }}>Good Afternoon, </Text>
                            <Text style={{ fontSize: 17, color: 'black', marginTop: 5 / 667 * height, fontWeight: '300' }}>Devanshu Jain</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 10, marginLeft: 130 / 375 * width, paddingBottom: 5, fontStyle: 'italic' }}>Database updated upto: 20/20/2020</Text>
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
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: '#fff8f7'
    },
    view3: {
        //flex: 0.4,
        // // alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'flex-start',
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100 / 375 * width,
        height: 100 / 667 * height,
        marginRight: 50 / 375 * width,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#FF4500',
        backgroundColor: '#DCDCDC'
    }
}

export { WelcomeComponent }
