import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import {
  Surface, List,
} from 'react-native-paper';
import UserHeader from '../../components/customHeader/userHeader';
import styles from './styles';

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
