import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../infrastructure/theme/colors';
import {strings} from '../../../constants/strings';

const TermsText = () => {
  return <Text style={styles.text}>{strings.loremUpsumLarge}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.darkGray,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
    lineHeight: 20,
  },
});

export default TermsText;
