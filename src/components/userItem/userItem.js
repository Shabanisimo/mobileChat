import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text, TouchableRipple } from 'react-native-paper';
import Image from '../image/image';

const styles = StyleSheet.create({
  userItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ececec',
    borderBottomWidth: 0.4,
  },
  selectedItem: {
    backgroundColor: '#e9f8fd',
  },
  userTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
});

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
