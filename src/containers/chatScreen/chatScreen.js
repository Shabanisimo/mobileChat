import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageList from '../../components/messageList/messageList';
import ChatForm from '../../components/chatForm/chatForm';
import { sendMessage } from '../../store/actions/socket';
import ChatHeader from '../../components/customHeader/chatHeader';

const styles = StyleSheet.create({
  chatScreen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#d8e4f4',
  },
  messageList: {
    height: 665,
  },
});

class ChatScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerTitle: <ChatHeader title={navigation.getParam('name')} imgUrl={navigation.getParam('imgUrl')} />,
    });

    static propTypes = {
      navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        setParams: PropTypes.func.isRequired,
      }).isRequired,
    }

    constructor() {
      super();

      this.onSendMessage = this.onSendMessage.bind(this);
    }

    onSendMessage(msg) {
      this.props.sendMessage(msg);
    }

    render() {
      const { roomList, userId } = this.props;
      const roomId = this.props.navigation.getParam('roomId');
      return (
        <KeyboardAvoidingView style={styles.chatScreen}>
          <MessageList style={styles.messageList} room={roomList[roomId]} userId={userId} navigation={this.props.navigation} />
          <ChatForm onSendMessage={this.onSendMessage} />
        </KeyboardAvoidingView>
      );
    }
}

const mapStateToProps = state => ({
  roomList: state.roomList.roomList,
  userId: state.userInfo.userInfo.id,
});

export default connect(
  mapStateToProps,
  {
    sendMessage,
  },
)(ChatScreen);
