import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  disease: string;
};

const Disease = ({disease}: Props) => {
  return (
    <View style={styles.diseaseWrapper}>
      <Text style={styles.disease}>{disease}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  diseaseWrapper: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    width: '30%',
  },
  disease: {
    fontSize: 11,
    fontFamily: 'Spartan-SemiBold',
    color: colors.white,
    textAlign: 'center',
  },
});

export default Disease;
