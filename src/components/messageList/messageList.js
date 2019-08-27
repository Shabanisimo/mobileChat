import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Message from '../message/message';

const styles = StyleSheet.create({
  messageListContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
class MessageList extends Component {
    static propTypes = {
      room: PropTypes.object.isRequired,
      userId: PropTypes.number.isRequired,
    }

    render() {
      const { room, userId } = this.props;
      return (
        <ScrollView
          style={styles.messageListContainer}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {
            room
              ? room.Messages.map((msg, i, messageList) => (
                <Message
                  key={msg.id}
                  user={msg.SenderId === userId}
                  isShowImage={
                    messageList[i + 1]
                      ? msg.SenderId === messageList[i + 1].SenderId
                      : null
                  }
                  message={msg}
                  sender={room.Users[msg.SenderId]}
                  navigation={this.props.navigation}
                />
              ))
              : <Text>Loading...</Text>
            }
        </ScrollView>
      );
    }
}

export default MessageList;
