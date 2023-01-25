import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../infrastructure/theme/colors';
import {strings} from '../../../constants/strings';

const CameraButton = () => {
  return (
    <View style={styles.cameraButtonWrapper}>
      <View style={styles.cameraButtonTitleWrapper}>
        <Text style={styles.buttonTitle}>{strings.photo}</Text>
      </View>
      <View style={styles.cameraButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  cameraButtonWrapper: {
    position: 'absolute',
    bottom: '5%',
    gap: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cameraButtonTitleWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 18,
    paddingVertical: 4,
    alignSelf: 'center',
    borderRadius: 13,
  },
  buttonTitle: {
    color: colors.white,
    fontFamily: 'Spartan-Semibold',
    fontSize: 14,
    textAlign: 'center',
  },
  cameraButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.black,
  },
});

export default CameraButton;
