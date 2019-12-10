import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { connect } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';
import { asyncAuthorization } from '../../store/actions/user';
import { emailValid, stringValid } from '../../utils/validation';
import styles from './styles';

class AuthorizationScreen extends Component {
  static navigationOptions = {
    title: 'Authorization',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    asyncAuthorization: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      email: 'cat@dog.meow',
      password: '12345678',
      emailValid: false,
      passwordValid: false,
      auth: false,
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onAuthorization = this.onAuthorization.bind(this);
  }

  onChangeEmail(email) {
    this.setState({
      emailValid: !emailValid(email),
      email,
    });
  }

  onChangePassword(password) {
    this.setState({
      passwordValid: !stringValid(password, 8, 16),
      password,
    });
  }

  onAuthorization() {
    this.setState({
      auth: true,
    });
    this.props.asyncAuthorization(this.state.email, this.state.password)
      .then((res) => {
        if (res) {
          this.props.navigation.navigate('RoomListScreen');
        } else {
          this.setState({
            auth: false,
          });
          Alert.alert(
            'Something Wrong',
            'Authorization faild',
            [
              { text: 'OK' },
            ],
            { cancelable: false },
          );
        }
      })
      .catch(() => {
      });
  }

  onSwipeLeft(gestureState) {
    const { navigation } = this.props;

    navigation.navigate('Registration');
  }

  render() {
    const {
      email, password, emailValid, passwordValid, auth,
    } = this.state;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        style={styles.authForm}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
      >
        <TextInput
          label="Email"
          value={email}
          onChangeText={this.onChangeEmail}
          error={emailValid}
          type={email}
          mode="outlined"
        />
        <HelperText
          type="error"
          visible={emailValid}
        >
          Email is not correct!
        </HelperText>
        <TextInput
          label="Password"
          value={password}
          onChangeText={this.onChangePassword}
          error={passwordValid}
          type={password}
          mode="outlined"
          secureTextEntry
        />
        <HelperText
          type="error"
          visible={passwordValid}
        >
          Password will be longer 8 and less 16 symbols!
        </HelperText>
        <Button
          style={styles.authBtn}
          mode="contained"
          onPress={this.onAuthorization}
          loading={auth}
        >
          Sign In
        </Button>
        <Button
          style={styles.authBtn}
          onPress={() => this.props.navigation.navigate('Registration')}
        >
          Registration
        </Button>
      </GestureRecognizer>
    );
  }
}

export default connect(
  null,
  {
    asyncAuthorization,
  },
)(AuthorizationScreen);
