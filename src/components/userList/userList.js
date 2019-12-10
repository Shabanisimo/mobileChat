import React, { Component } from 'react';
import {
  ScrollView, View, Text
} from 'react-native';
import UserItem from '../userItem/userItem';
import styles from './styles';

export default class UserList extends Component {
  render() {
    const {
      userList, selectedUsers, onSelectUser, userToken,
    } = this.props;
    return (
      <View
        style={styles.userListContainer}
      >
        <ScrollView>
          {
              userList
                ? userList.map(user => (
                  user.token !== userToken
                    ? (
                      <UserItem
                        key={user.token}
                        token={user.token}
                        name={user.name}
                        surname={user.surname}
                        selected={selectedUsers ? selectedUsers.indexOf(user.token) > -1 : null}
                        imgUrl={user.imgUrl}
                        onSelectUser={onSelectUser}
                      />
                    )
                    : null
                ))
                : <Text>User list is empty</Text>
          }
        </ScrollView>
      </View>
    );
  }
}
