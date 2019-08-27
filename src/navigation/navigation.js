import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AuthorizationScreen from '../containers/authorizationScreen/authorizationScreen';
import RegistrationScreen from '../containers/registrationScreen/registrationScreen';
import RoomListScreen from '../containers/roomListScreen/roomListScreen';
import ChatScreen from '../containers/chatScreen/chatScreen';
import AuthLoadingScreen from '../containers/authLoadingScreen/authLoadingScreen';
import SettingsScreen from '../containers/settingsScreen/settingsScreen';
import CreateRoomScreen from '../containers/createRoomScreen/createRoomScreen';
import DrawerNavigator from '../components/drawerNavigation/drawerNavigation';
import UpdatingUserInfoScreen from '../containers/updatingUserInfoScreen/updatingUserInfoScreen';
import UserScreen from '../containers/userScreen/userScreen';

const noLoginStackNavigator = createStackNavigator(
  {
    Authorization: { screen: AuthorizationScreen },
    Registration: { screen: RegistrationScreen },
  },
  {
    initialRouteName: 'Authorization',
    transitionConfig: () => fromRight(),
  },
);

const RoomListStackNavigator = createStackNavigator(
  {
    RoomListScreen: { screen: RoomListScreen },
    ChatScreen: { screen: ChatScreen },
    CreateRoomScreen: { screen: CreateRoomScreen },
    UserScreen: { screen: UserScreen },
  },
  {
    initialRouteName: 'RoomListScreen',
    transitionConfig: () => fromRight(),
  },
);

const SettingsStackNavigator = createStackNavigator(
  {
    SettingsScreen: { screen: SettingsScreen },
    UpdatingUserInfoScreen: { screen: UpdatingUserInfoScreen },
  },
  {
    initialRouteName: 'SettingsScreen',
    transitionConfig: () => fromRight(),
  },
);

RoomListStackNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  switch (routeName) {
    case 'ChatScreen':
      return {
        drawerLockMode: 'locked-closed',
      };
    case 'CreateRoomScreen':
      return {
        drawerLockMode: 'locked-closed',
      };
    case 'RoomList':
      return {
        tabBar: 'Room list',
      };
    case 'UserScreen':
      return {
        drawerLockMode: 'locked-closed',
      };
    default: {
      return {
        drawerIcon: () => (
          <MaterialIcons name="home" style={{ fontSize: 24 }} />
        ),
      };
    }
  }
};

SettingsStackNavigator.navigationOptions = ({ navigation }) => ({
  tabBar: 'Settings',
  drawerIcon: () => (
    <MaterialIcons name="settings" style={{ fontSize: 24 }} />
  ),
});

export default AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      NoLogin: noLoginStackNavigator,
      Login: (
        createDrawerNavigator(
          {
            RoomList: RoomListStackNavigator,
            Settings: SettingsStackNavigator,
          },
          {
            contentComponent: DrawerNavigator,
            drawerWidth: 320,
          },
        )
      ),
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
