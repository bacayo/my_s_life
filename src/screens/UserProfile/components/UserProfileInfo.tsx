import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IconSvg from '../../../components/IconComponent/SvgIcon';
import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  text: string;
  iconName: string;
};

const UserProfileInfo = ({text, iconName}: Props) => {
  return (
    <View style={styles.container}>
      <IconSvg name={iconName} width={20} height={20} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: colors.gray,
    fontFamily: 'Spartan-SemiBold',
    fontSize: 14,
  },
});

export default UserProfileInfo;
