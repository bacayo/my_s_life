import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  title: string | undefined;
};

const Tag = ({title}: Props) => {
  return (
    <View style={styles.tag}>
      <Icon name="tag" size={12} color="#bdbdbd" />
      <Text style={styles.tagTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  tagTitle: {
    fontSize: 12,
    fontFamily: 'Spartan-Medium',
    color: colors.gray,
  },
});

export default Tag;
