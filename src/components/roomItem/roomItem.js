import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text, TouchableRipple } from 'react-native-paper';
import Image from '../image/image';

const styles = StyleSheet.create({
  roomItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    borderColor: '#ececec',
    borderBottomWidth: 0.4,
  },
  roomTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
});

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
