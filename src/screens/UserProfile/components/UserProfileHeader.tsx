import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderImage from './HeaderImage';
import ProfilePhoto from './ProfilePhoto';
import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  name: string;
};

const UserProfileHeader = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <HeaderImage />
      {/* Profile photo */}
      <View style={styles.profileHeaderWrapper}>
        <View style={styles.profilePhoto}>
          <ProfilePhoto />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    // height: 200,
    height: '100%',
  },
  profileHeaderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },
  profilePhoto: {
    borderRadius: 90,
    borderWidth: 2,
    borderColor: colors.dark,
  },
  name: {
    fontFamily: 'Spartan-SemiBold',
    fontSize: 16,
    color: colors.darkGray,
  },
});

export default UserProfileHeader;
