import React, { Component } from 'react';
import { Image, View, Button, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class UploadUserImageScreen extends Component {

  constructor() {
    super();

    this.state = {
      photo: null,
    }
  }
    
  handleChoosePhoto = async () => {
    const options = {}
    console.log('here')
    try {
      const grantedFiles = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Cool Photo App Camera Permission',
            message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
      )
      if (grantedFiles === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.showImagePicker(options, response => {
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { photo } = this.state

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}
