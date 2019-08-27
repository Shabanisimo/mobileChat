import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Image from '../image/image';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
});

const ChatHeader = ({ title, imgUrl }) => (
  <View style={styles.header}>
    <Image imgUrl={imgUrl} text={title} imgSize={46} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default ChatHeader;
