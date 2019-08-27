import React from 'react';
import {
  AsyncStorage,
  View,
  StyleSheet,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Loader from '../../components/loader/loader';

const styles = StyleSheet.create({
  authLoadingScreenContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');

    this.props.navigation.navigate(userToken ? 'RoomListScreen' : 'Authorization');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.authLoadingScreenContainer}>
        <Loader />
      </View>
    );
  }
}

export default AuthLoadingScreen;
