import React, { Component } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation';
import { asyncAddRoomList, asyncLoadRoomInfo } from '../../store/actions/room';
import { addSocket } from '../../store/actions/socket';
import { asyncGetUserInfo } from '../../store/actions/user';
import RoomItem from '../../components/roomItem/roomItem';

const IoniconsHeaderButton = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={MaterialIcons} iconSize={23} color="black" />
);

const styles = StyleSheet.create({
  roomListContainer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
});

class RoomListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      return {
        title: '<Noname />',
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="menu" iconName="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          </HeaderButtons>
        ),
        headerRight: (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="create room" iconName="account-multiple-plus" onPress={() => navigation.navigate('CreateRoomScreen')} />
          </HeaderButtons>
        ),
      };
    };

    static propTypes = {
      roomList: PropTypes.objectOf(PropTypes.object).isRequired,
      navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
      }).isRequired,
      asyncAddRoomList: PropTypes.func.isRequired,
      asyncGetUserInfo: PropTypes.func.isRequired,
      addSocket: PropTypes.func.isRequired,
    }

    constructor() {
      super();

      this.onSelectRoom = this.onSelectRoom.bind(this);
    }

    componentDidMount() {
      const {
        asyncAddRoomList, asyncGetUserInfo, addSocket, userInfo,
      } = this.props;

      this.props.navigation.setParams({ userInfo });

      asyncAddRoomList();
      asyncGetUserInfo();
      addSocket();
    }

    onSelectRoom(id, roomName, imgUrl) {
      const { navigation, asyncLoadRoomInfo } = this.props;
      navigation.navigate('ChatScreen', { name: roomName, roomId: id, imgUrl });
      asyncLoadRoomInfo(id);
    }

    render() {
      const { roomList } = this.props;
      const roomListKeys = Object.keys(roomList);
      return (
        <View
          style={styles.roomListContainer}
        >
          <ScrollView>
            {roomListKeys
              ? roomListKeys.map(roomKey => (
                <RoomItem
                  key={roomList[roomKey].token}
                  imgUrl={roomList[roomKey].imgUrl}
                  roomName={roomList[roomKey].name}
                  id={roomList[roomKey].id}
                  messageList={roomList[roomKey].Message}
                  onSelectRoom={this.onSelectRoom}
                />
              ))
              : <Text>Create new room =)</Text>
              }
          </ScrollView>
        </View>
      );
    }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo,
  roomList: state.roomList.roomList,
  roomInfo: state.roomList.activeRoom,
  socket: state.socket,
});

export default
connect(
  mapStateToProps,
  {
    asyncAddRoomList,
    asyncLoadRoomInfo,
    addSocket,
    asyncGetUserInfo,
  },
)(RoomListScreen);
