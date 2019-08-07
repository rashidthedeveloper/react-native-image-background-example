import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2019/07/16/11/14/banff-4341560_960_720.jpg',
        }}
        style={styles.container}
        imageStyle={styles.image}
      >
        <Text style={styles.header}>Hello World!</Text>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
  },
  image: {
    opacity: 50
  },
  header: {
    fontSize: 48,
    color: 'white'
  }
});
