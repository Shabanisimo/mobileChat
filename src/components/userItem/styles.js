import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  userItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ececec',
    borderBottomWidth: 0.4,
  },
  selectedItem: {
    backgroundColor: '#e9f8fd',
  },
  userTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;