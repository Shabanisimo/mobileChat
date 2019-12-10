import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import UserList from '../userList/userList';
import styles from './styles';

export default class CreateRoomForm extends Component {
  constructor() {
    super();

    this.state = {
      roomName: '',
    };

    this.onChangeRoomName = this.onChangeRoomName.bind(this);
  }

  onChangeRoomName(text) {
    this.setState({
      roomName: text,
    });
  }

  render() {
    const {
      userList, selectedUsers, onSelectUser, onCreateRoom, userToken,
    } = this.props;
    return (
      <KeyboardAvoidingView style={styles.createRoomForm}>
        <TextInput
          style={styles.createRoomFormInput}
          placeholder="Write room name"
          onChangeText={this.onChangeRoomName}
        />
        <UserList
          style={styles.userList}
          userList={userList}
          selectedUsers={selectedUsers}
          onSelectUser={onSelectUser}
          userToken={userToken}
        />
        <Button
          style={styles.createRoomFormBtn}
          mode="contained"
          onPress={() => onCreateRoom(this.state.roomName)}
        >
          Create room
        </Button>
      </KeyboardAvoidingView>
    );
  }
}
