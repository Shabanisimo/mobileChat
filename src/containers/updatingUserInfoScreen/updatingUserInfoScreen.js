import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { connect } from 'react-redux';
import { emailValid, stringValid } from '../../utils/validation';
import { updateUserInfo } from '../../store/actions/user';
import styles from './styles';

class UpdatingUserInfoScreen extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      surname: '',
      email: '',
      nameValid: false,
      surnameValid: false,
      emailValid: false,
      auth: false,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onUpdateUserInfo = this.onUpdateUserInfo.bind(this);
  }

  componentDidMount() {
    const { name, surname, email } = this.props.userInfo;
    this.setState({
      name,
      surname,
      email,
    });
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

  onUpdateUserInfo() {
    const { updateUserInfo } = this.props;
    const { name, surname, email } = this.state;
    this.setState({
      auth: true,
    });
    updateUserInfo(
      name,
      surname,
      email,
    )
      .then(() => {
        this.props.navigation.navigate('SettingsScreen');
        this.setState({
          auth: false,
        });
      });
  }

  render() {
    const {
      name, surname, email,
      nameValid, surnameValid, emailValid, auth,
    } = this.state;
    return (
      <View style={styles.updateForm}>
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
        <Button mode="text">Pick a photo</Button>
        <Button
          style={styles.updateBtn}
          mode="contained"
          onPress={this.onUpdateUserInfo}
          loading={auth}
        >
          Update
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo,
});

export default connect(
  mapStateToProps,
  {
    updateUserInfo,
  },
)(UpdatingUserInfoScreen);
