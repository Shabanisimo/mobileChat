import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CreateRoomForm from '../../components/createRoomForm/createRoomForm';
import { asyncLoadUserList } from '../../store/actions/userList';
import { asyncCreateRoom } from '../../store/actions/room';

const styles = StyleSheet.create({
  createRoomScreenContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
  },
});
class CreateRoomScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Create room',
    };
  };

  constructor() {
    super();

    this.state = {
      selectedUsers: [],
    };
    this.onSelectUser = this.onSelectUser.bind(this);
    this.onCreateRoom = this.onCreateRoom.bind(this);
  }

  componentDidMount() {
    const { asyncLoadUserList } = this.props;

    asyncLoadUserList();
  }

  onSelectUser(id) {
    const { selectedUsers } = this.state;
    if (selectedUsers.indexOf(id) < 0) {
      this.setState({
        selectedUsers: [...selectedUsers, id],
      });
    } else {
      this.setState({
        selectedUsers: [...selectedUsers.filter(userId => userId !== id)],
      });
    }
  }

  onCreateRoom(roomName) {
    const { selectedUsers } = this.state;
    const { asyncCreateRoom, navigation } = this.props;

    asyncCreateRoom(roomName, selectedUsers)
      .then(() => {
        this.setState({
          selectedUsers: [],
        });
        navigation.navigate('RoomListScreen');
      });
  }

  render() {
    const { userList, userToken } = this.props;
    const { selectedUsers } = this.state;
    return (
      <View style={styles.createRoomScreenContainer}>
        <CreateRoomForm userList={userList} userToken={userToken} selectedUsers={selectedUsers} onSelectUser={this.onSelectUser} onCreateRoom={this.onCreateRoom} />
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    userList: state.userList,
    userToken: state.userInfo.userInfo.token,
  }
);

export default connect(
  mapStateToProps,
  {
    asyncLoadUserList,
    asyncCreateRoom,
  },
)(CreateRoomScreen);
