import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  roomItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    borderColor: '#ececec',
    borderBottomWidth: 0.4,
  },
  roomTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;