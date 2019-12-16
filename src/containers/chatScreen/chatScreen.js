import React, { Component } from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/actions/socket';
import ChatHeader from '../../components/customHeader/chatHeader';
import styles from './styles';
import ChatContainer from "../../components/chatContainer/chatContainer";
import MessageList from "../../components/messageList/messageList";

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
        <KeyboardAvoidingView style={styles.chatScreen} >
          <SafeAreaView>
            <ChatContainer
              room={roomList[roomId]}
              userId={userId}
              navigation={this.props.navigation}
              onSendMessage={this.onSendMessage}
            />
          </SafeAreaView>
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
