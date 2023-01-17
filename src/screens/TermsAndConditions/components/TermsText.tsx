import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../infrastructure/theme/colors';

const TermsText = () => {
  return (
    <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s
    </Text>
  );
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
