import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import Image from '../image/image';

const IoniconsHeaderButton = (passMeFurther) => (
  <HeaderButton {...passMeFurther} IconComponent={MaterialIcons} iconSize={23} color="black" />
);

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
  },
  userInfoBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 15,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
  },
});

class UserHeader extends Component {
  render() {
    const {
      navigation,
    } = this.props;
    const userInfo = navigation.getParam('userInfo');
    return (
      userInfo
        ? (
          <View style={styles.headerContainer}>
            <HeaderButtons style={styles.headerButton} HeaderButtonComponent={IoniconsHeaderButton}>
              <Item title="back" iconName="arrow-back" onPress={() => navigation.goBack(null)} />
            </HeaderButtons>
            <View style={styles.userInfoBlock}>
              <Image text="name" imgSize={56} imgUrl={userInfo.imgUrl} text={userInfo.name} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>
                  {`${userInfo.surname} ${userInfo.name}`}
                </Text>
              </View>
            </View>
          </View>
        )
        : null
    );
  }
}

export default UserHeader;
