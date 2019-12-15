import React, { Component } from 'react'
import { Image, View, Button } from 'react-native'

export default class UploadUserImage extends Component {

  constructor() {
    this.state = {
      photo: null,
    }
  }
    
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    return (
      <View>
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
