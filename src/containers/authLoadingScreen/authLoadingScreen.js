import React from 'react';
import {
  AsyncStorage,
  View,
} from 'react-native';
import Loader from '../../components/loader/loader';
import styles from './styles';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');

    this.props.navigation.navigate(userToken ? 'RoomListScreen' : 'Authorization');
  };

  render() {
    return (
      <View style={styles.authLoadingScreenContainer}>
        <Loader />
      </View>
    );
  }
}

export default AuthLoadingScreen;
