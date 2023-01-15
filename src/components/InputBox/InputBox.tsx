import {Text, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../infrastructure/theme/colors';

type Props = {
  label: string;
};

const InputBox = ({label}: Props) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    //paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'relative', // Needed to be able to precisely overlap label with border
    top: 16, // Vertical position of label. Eyeball it to see where label intersects border.
    left: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  label: {
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
    lineHeight: 18,
    color: colors.black,
    textTransform: 'capitalize',
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: 5,
    // padding: 8,
    zIndex: 0, // Ensure border has z-index of 0
    borderColor: '#e0e0e0',
    backgroundColor: colors.white,
  },
  input: {},
});

export default InputBox;
