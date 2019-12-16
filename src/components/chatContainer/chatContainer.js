import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MessageList from "../messageList/messageList";
import ChatForm from "../chatForm/chatForm";
import { GiftedChat } from 'react-native-gifted-chat';

const ChatContainer = ({onSendMessage, room, userId, navigation}) => {
  return (
    <View style={styles.container}>
      {/* <ChatForm onSendMessage={onSendMessage} />
      <MessageList room={room} userId={userId} navigation={navigation} /> */}
      <GiftedChat 
        messages={room.Messages}
      />
    </View>
  );
}

export default ChatContainer;