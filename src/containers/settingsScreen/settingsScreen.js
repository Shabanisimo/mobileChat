import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button, Surface, List,
} from 'react-native-paper';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { logOut } from '../../store/actions/user';
import { disconnectSocket } from '../../store/actions/socket';
import UserHeader from '../../components/customHeader/userHeader';

const styles = StyleSheet.create({
  settingsScreenContainer: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  settingsScreenUserInfoBlock: {
    width: '100%',
    elevation: 1,
  },
  settingsScreenUserSettings: {
    width: '100%',
    elevation: 1,
    marginTop: 15,
  },
  settingsScreenBottomSheetButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
});

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const userInfo = navigation.getParam('userInfo');
    return {
      headerStyle: {
        height: 150,
      },
      headerTitle: <UserHeader navigation={navigation} userInfo={userInfo} />,
    };
  };

  constructor() {
    super();

    this.RBSheet = React.createRef();
  }

  componentDidMount() {
    const {
      navigation,
      userInfo: {
        imgUrl, name, surname,
      },
    } = this.props;
    navigation.setParams({
      userInfo: {
        imgUrl, name, surname,
      },
    });
  }

  render() {
    const {
      logOut, disconnectSocket, navigation,
      userInfo: {
        email,
      },
    } = this.props;
    return (
      <View style={styles.settingsScreenContainer}>
        <Surface style={styles.settingsScreenUserInfoBlock}>
          <List.Section>
            <List.Subheader>User info</List.Subheader>
            <List.Item
              title={email}
              description="Email"
            />
          </List.Section>
        </Surface>
        <Surface style={styles.settingsScreenUserSettings}>
          <List.Section>
            <List.Subheader>Settings</List.Subheader>
            <List.Item
              title="Change user info"
              left={props => <MaterialIcons {...props} name="pen" style={{ fontSize: 24 }} />}
              onPress={() => navigation.navigate('UpdatingUserInfoScreen')}
            />
            <List.Item
              title="Log Out"
              left={props => <MaterialIcons {...props} name="exit-to-app" style={{ fontSize: 24 }} />}
              onPress={() => this.RBSheet.open()}
            />
          </List.Section>
        </Surface>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={150}
          animationType="fade"
          duration={400}
          closeOnDragDown
        >
          <View>
            <Button
              mode="text"
              onPress={() => this.RBSheet.close()}
              contentStyle={styles.settingsScreenBottomSheetButton}
            >
              <MaterialIcons name="cancel" style={{ fontSize: 24 }} />
              Cancel
            </Button>
            <Button
              mode="text"
              onPress={() => {
                disconnectSocket();
                logOut()
                  .then(() => navigation.navigate('Authorization'));
              }}
              contentStyle={styles.settingsScreenBottomSheetButton}
            >
              <MaterialIcons name="exit-to-app" style={{ fontSize: 24 }} />
              Log Out
            </Button>
          </View>
        </RBSheet>
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
    logOut,
    disconnectSocket,
  },
)(SettingsScreen);
