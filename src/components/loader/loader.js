import React, { Component } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default class Loader extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
}
