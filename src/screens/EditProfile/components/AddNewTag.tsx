import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  iconName: string;
};

const AddNewTag = ({iconName}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={10} color={colors.white} />
      <Text style={styles.title}>Add a new tag</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '40%',
    gap: 5,
  },
  title: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Spartan-SemiBold',
  },
});

export default AddNewTag;
