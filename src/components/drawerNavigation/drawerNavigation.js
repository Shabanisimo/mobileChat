import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { connect } from 'react-redux';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Image from '../image/image';

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#d8e4f4',
  },
  drawerHeaderInner: {
    marginTop: 20,
    marginLeft: 20,
  },
  drawerUserInfo: {
    marginTop: 20,
  },
  drawerUserName: {
    fontWeight: '700',
    color: '#ffffff',
  },
  drawerUserEmail: {
    color: '#ffffff',
  },
  chatModeSwitcherContainer: {
    display: 'flex',
  },
});

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
