import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import { asyncRegistration } from '../../store/actions/user';
import { emailValid, stringValid } from '../../utils/validation';
import styles from './styles';

class RegistrationScreen extends Component {
    static navigationOptions = {
      title: 'Registration',
    };

    static propTypes = {
      navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
      }).isRequired,
      asyncRegistration: PropTypes.func.isRequired,
    }

    constructor() {
      super();

      this.state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        nameValid: false,
        surnameValid: false,
        emailValid: false,
        passwordValid: false,
        auth: false,
      };

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeSurname = this.onChangeSurname.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onRegistration = this.onRegistration.bind(this);
    }

    onChangeName(name) {
      this.setState({
        nameValid: !stringValid(name, 1),
        name,
      });
    }

    onChangeSurname(surname) {
      this.setState({
        surnameValid: !stringValid(surname, 1),
        surname,
      });
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

    onRegistration() {
      this.setState({
        auth: true,
      });
      const { name, surname, email, password } = this.state;
      this.props.asyncRegistration(
        name,
        surname,
        email,
        password,
      )
        .then((res) => {
          if (res) {
            this.props.navigation.navigate('RoomListScreen');
          } else {
            this.setState({
              auth: false,
            });
            Alert.alert(
              'Something Wrong',
              'Registartion faild',
              [
                { text: 'OK' },
              ],
              { cancelable: false },
            );
          }
        });
    }

    render() {
      const {
        name, surname, email, password,
        nameValid, surnameValid, emailValid, passwordValid, auth,
      } = this.state;

      return (
        <GestureRecognizer
          style={styles.regForm}
          onSwipeRight={(state) => this.onSwipeRight(state)}
        >
          <TextInput
            label="Name"
            value={name}
            onChangeText={this.onChangeName}
            error={nameValid}
            mode="outlined"
          />
          <HelperText
            type="error"
            visible={nameValid}
          >
            Password will be longer 1 symbol!
          </HelperText>
          <TextInput
            label="Surname"
            value={surname}
            onChangeText={this.onChangeSurname}
            error={surnameValid}
            mode="outlined"
          />
          <HelperText
            type="error"
            visible={surnameValid}
          >
            Password will be longer 1 symbol!
          </HelperText>
          <TextInput
            label="Email"
            value={email}
            onChangeText={this.onChangeEmail}
            error={emailValid}
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
            error={passwordValid}
            onChangeText={this.onChangePassword}
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
            style={styles.regBtn}
            mode="contained"
            onPress={this.onRegistration}
            loading={auth}
          >
          Sign Up
          </Button>
        </GestureRecognizer>
      );
    }
}

export default connect(
  null,
  { asyncRegistration },
)(RegistrationScreen);
