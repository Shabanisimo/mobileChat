import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text, TouchableRipple } from 'react-native-paper';
import Image from '../image/image';
import styles from './styles';

export default class RoomItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    roomName: PropTypes.string,
    onSelectRoom: PropTypes.func.isRequired,
  }

  render() {
    const {
      id, imgUrl, roomName, onSelectRoom,
    } = this.props;
    return (
      <TouchableRipple
        onPress={() => onSelectRoom(id, roomName, imgUrl)}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.roomItem}>
          <Image
            imgUrl={imgUrl}
            text={roomName}
            imgSize={60}
          />
          <Text style={styles.roomTitle}>{ `${roomName}` }</Text>
        </View>
      </TouchableRipple>
    );
  }
}
