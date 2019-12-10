import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { connect } from 'react-redux';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Image from '../image/image';
import styles from './styles';

class DrawerNavigator extends Component {
  constructor() {
    super();

    this.state = {
      isSwitchOn: false,
    };

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    const { isSwitchOn } = this.state;
    this.setState({
      isSwitchOn: !isSwitchOn,
    });
  }

  render() {
    const {
      imgUrl, name, surname, email,
    } = this.props.userInfo;
    const {
      isSwitchOn,
    } = this.state;
    return (
      <SafeAreaView style={styles.drawer}>
        <View style={styles.drawerHeader}>
          <View style={styles.drawerHeaderInner}>
            <Image imgUrl={imgUrl} text={name} size={30} />
            <View style={styles.drawerUserInfo}>
              <Text style={styles.drawerUserName}>{`${surname} ${name}`}</Text>
              <Text style={styles.drawerUserEmail}>{email}</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
          <View style={styles.chatModeSwitcherContainer}>
            <Text>Night mode</Text>
            <Switch value={isSwitchOn} onValueChange={this.onSwitch} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo,
});

export default connect(
  mapStateToProps,
)(DrawerNavigator);
