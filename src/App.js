import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SplashScreen from './Components/Splash/SplashScreen';
import StackNavigation from './Components/Routing/StackNavigation';
class App extends Component {

  render() {
    return (
      <StackNavigation />
    );
  }

}

export default App



