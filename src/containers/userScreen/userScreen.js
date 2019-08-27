import React, { Component } from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import {
  Surface, List,
} from 'react-native-paper';
import UserHeader from '../../components/customHeader/userHeader';

const styles = StyleSheet.create({
  userScreenContainer: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  userScreenUserInfoBlock: {
    width: '100%',
    elevation: 1,
  },
});

export default class UserScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const userInfo = navigation.getParam('userInfo');
    return {
      headerStyle: {
        height: 150,
      },
      headerLeft: null,
      headerTitle: <UserHeader navigation={navigation} userInfo={userInfo} />,
    };
  };

  render() {
    const { navigation } = this.props;
    const userInfo = navigation.getParam('userInfo');
    return (
      <View style={styles.userScreenContainer}>
        <Surface style={styles.userScreenUserInfoBlock}>
          <List.Section>
            <List.Subheader>User info</List.Subheader>
            <List.Item
              title={userInfo.email}
              description="Email"
              onPress={() => Linking.openURL(`mailto:${userInfo.email}`)}
            />
          </List.Section>
        </Surface>
      </View>
    );
  }
}
