import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  messageBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
  },
  otherMessageBlock: {
    justifyContent: 'flex-start',
  },
  userMessageBlock: {
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  messageBlockWithoutImage: {
    marginLeft: 40,
  },
  messageInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: 300,
    marginLeft: 10,
    padding: 8,
    borderRadius: 10,
  },
  otherMessageInfoContainer: {
    backgroundColor: '#ffffff',
  },
  userMessageInfoContainer: {
    minHeight: 40,
    justifyContent: 'center',
    backgroundColor: '#3590eb',
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
  },
  messageDate: {
    fontSize: 10,
    color: '#b4b9bd',
  },
  messageTimeBlock: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  whiteMessageColor: {
    color: '#ffffff',
  },
  blackMessageColor: {
    color: '#000000',
  },
});

export default styles;