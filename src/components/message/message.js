import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import Image from '../image/image';
import styles from './styles';

export default function Message(props) {
  const {
    navigation,
    message:
    {
      messageText,
      createdAt,
    },
    sender:
    {
      name,
      imgUrl,
      email,
      surname,
    },
    user,
    isShowImage,
  } = props;
  const time = new Date(createdAt);
  return (
    <View style={{
      ...(user ? styles.userMessageBlock : styles.otherMessageBlock),
      ...styles.messageBlock,
      ...(!user && isShowImage ? styles.messageBlockWithoutImage : null),
    }}
    >
      {
        !user && !isShowImage
          ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('UserScreen', {
                userInfo: {
                  name, imgUrl, email, surname,
                },
              })}
            >
              <Image
                imgSize={40}
                imgUrl={imgUrl}
                text={name}
              />
            </TouchableOpacity>
          )
          : null
      }
      <View style={{
        ...(user
          ? styles.userMessageInfoContainer
          : styles.otherMessageInfoContainer),
        ...styles.messageInfoContainer,
      }}
      >
        <View>
          {
            !user
              ? <Text style={styles.userName}>{name}</Text>
              : null
          }
          <Text style={(user ? styles.whiteMessageColor : styles.blackMessageColor)}>
            {messageText}
          </Text>
          <View style={styles.messageTimeBlock}>
            <Text style={(user ? styles.whiteMessageColor : styles.blackMessageColor)}>{`${time.getUTCHours()}:${time.getUTCMinutes()}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
