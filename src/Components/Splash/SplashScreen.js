import React, { Component } from 'React';
import { View, StatusBar, Image, Text, Animated, Easing, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StackNavigation from '../Routing/StackNavigation';
import Dimensions from 'Dimensions';
var { height, width } = Dimensions.get('window');


class SplashScreen extends Component {
    constructor(props) {
        super();
        this.opacityValue = new Animated.Value(0);
        this.state = {
            splash: true
        }
    }

    opacity() {
        this.opacityValue.setValue(0);
        Animated.timing(
            this.opacityValue,
            {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear
            }
        ).start();
    }

    render() {
        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 1]
        });

        setTimeout(function () {
            this.setState({ splash: false })
        }.bind(this), 1)

        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={true} />
                {this.state.splash
                    ? <LinearGradient colors={['#ff7f66', '#f2a393', '#ff7f66']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} locations={[0.1, .5, 1]} style={styles.linearGradient}>
                        <View style={styles.imageView}>
                            <Animated.Image source={require('../../../assets/images/building.jpg')} style={[{ opacity }, styles.logo]} />

                            <Animated.Text style={[{ opacity }, { alignSelf: 'center', marginTop: 50 / 667 * height, fontSize: 50, fontFamily: 'Pacifico', color: '#043d99' }]}>
                                {this.opacity()}
                                Society
                            </Animated.Text>
                        </View>
                    </LinearGradient>
                    : <StackNavigation />
                }
            </View>
        )


    }
}

const styles = {
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageView: {
        height: 300 / 667 * height,
        width: 300 / 375 * width,
        flexDirection: 'column',
    },
    logo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
}

export default SplashScreen;