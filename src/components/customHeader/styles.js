import { StyleSheet } from 'react-native';

const chatHeader = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
});

const userHeader = StyleSheet.create({
  headerContainer: {
    display: 'flex',
  },
  userInfoBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 15,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export { chatHeader, userHeader };
