import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Image(props) {
  const { imgUrl, text, imgSize } = props;
  return (
    <View>
      {
        imgUrl
          ? <Avatar.Image size={imgSize} source={{ uri: `${imgUrl}` }} />
          : <Avatar.Text size={imgSize} label={`${String(text).charAt(0).toUpperCase()}`} />
      }
    </View>
  );
}
