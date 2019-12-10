import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Image from '../image/image';
import styles from './styles';

export default class UserItem extends Component {
  render() {
    const {
      token, name, surname, imgUrl, selected, onSelectUser,
    } = this.props;
    return (
      <TouchableRipple
        onPress={() => onSelectUser(token)}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={{ ...styles.userItem, ...(selected ? styles.selectedItem : null) }}>
          <Image
            imgSize={60}
            imgUrl={imgUrl}
            text={name}
          />
          <Text style={styles.userTitle}>{ `${name} ${surname}` }</Text>
        </View>
      </TouchableRipple>
    );
  }
}
