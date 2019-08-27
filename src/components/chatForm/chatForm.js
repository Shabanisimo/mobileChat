import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton, Colors } from 'react-native-paper';
import { throwStatement } from '@babel/types';

const styles = StyleSheet.create({
  chatForm: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
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

export default class ChatForm extends Component {
  constructor() {
    super();

    this.state = {
      messageText: '',
      isShowButton: false,
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChangeInput(text) {
    const showButtonCheck = !!text;
    this.setState({
      messageText: text,
      isShowButton: showButtonCheck,
    });
  }

  onSend() {
    this.props.onSendMessage(this.state.messageText);
    this.setState({
      messageText: '',
    });
  }

  render() {
    return (
      <View style={styles.chatForm}>
        <TextInput
          style={styles.chatInput}
          placeholder="Message"
          multiline
          onChangeText={this.onChangeInput}
          value={this.state.messageText}
          underlineColorAndroid="#ffffff"
        />
        {
          this.state.isShowButton
            ? (
              <IconButton
                style={styles.chatButton}
                icon="send"
                color="#3590eb"
                size={28}
                onPress={() => this.onSend()}
              />
            )
            : null
        }
      </View>
    );
  }
}
