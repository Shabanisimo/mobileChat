import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chatForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black'
  },
  chatInput: {
    flex: 1,
    maxHeight: 150,
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
  },
  chatButton: {
    backgroundColor: 'transparent',
  },
});

export default styles;