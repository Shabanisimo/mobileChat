import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#d8e4f4',
  },
  drawerHeaderInner: {
    marginTop: 20,
    marginLeft: 20,
  },
  drawerUserInfo: {
    marginTop: 20,
  },
  drawerUserName: {
    fontWeight: '700',
    color: '#ffffff',
  },
  drawerUserEmail: {
    color: '#ffffff',
  },
  chatModeSwitcherContainer: {
    display: 'flex',
  },
});

export default styles;