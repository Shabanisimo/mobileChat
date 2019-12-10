import React from 'react';
import { Text, View } from 'react-native';
import Image from '../image/image';
import { chatHeader as styles } from './styles';

const ChatHeader = ({ title, imgUrl }) => (
  <View style={styles.header}>
    <Image imgUrl={imgUrl} text={title} imgSize={46} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default ChatHeader;
