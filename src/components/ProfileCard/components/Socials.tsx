import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconSvg from '../../IconComponent/SvgIcon';
import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  likes: number;
  reply: number;
};

const Socials = ({likes, reply}: Props) => {
  return (
    <View style={styles.social}>
      {/* <SvgLikesLogo /> */}
      <IconSvg name="likes" height={20} width={20} />
      <Text style={styles.likes}>{likes}K</Text>
      <Icon name="comment" size={14} />
      <Text style={styles.likes}>{reply}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  social: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  likes: {
    fontSize: 14,
    fontFamily: 'Spartan-Medium',
    color: colors.darkGray,
  },
});

export default Socials;
