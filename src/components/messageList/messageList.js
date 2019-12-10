import React, { Component } from 'react';
import { Text, ScrollView, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Message from '../message/message';
import styles from './styles';

class MessageList extends Component {
    static propTypes = {
      room: PropTypes.object.isRequired,
      userId: PropTypes.number.isRequired,
    }

    render() {
      const { room, userId } = this.props;
      return (
        <View
          style={styles.messageListContainer}
        >
          <FlatList 
            data={room.Messages}
            renderItem={({ item, index }) => (
              <Message
                key={item.id}
                user={item.SenderId === userId}
                isShowImage={
                  room.Messages[index + 1]
                  ? item.SenderId === room.Messages[index + 1].SenderId
                  : null
                }
                message={item}
                sender={room.Users[item.SenderId]}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item) => item.id}
            extraData={room.Messages}
            ref={ref => this.flatList = ref}
            onLayout={() => this.flatList.scrollToEnd({animated: false})}
          />
        </View>
      );
    }
}

export default MessageList;
