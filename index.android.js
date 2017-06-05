import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Animation from 'lottie-react-native';

import anim from './assets/android_fingerprint.json';

export default class lottieloader extends Component {
  componentDidMount() {
    this.animation.play();
  }

  handleTouchID () {
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Would you like to use Touch ID?</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 250,
              height: 80
            }}
            loop={false}
            source={anim}
          />
        </View>
        <View style={styles.footer}>
          <TouchableHighlight onPress={this.handleTouchID()}>
            <Text style={styles.buttonText}>Use Touch ID</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030A16'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  buttonText: {
      color:"#fff",
      fontSize: 20,
  },
  text: {
      color: '#fff',
      textAlign: 'center',
  },
  footer: {
      position: 'absolute',
      flex:1,
      height: 50,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#21CE99',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

AppRegistry.registerComponent('lottieloader', () => lottieloader);
