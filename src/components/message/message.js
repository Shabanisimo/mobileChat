import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import Image from '../image/image';

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
