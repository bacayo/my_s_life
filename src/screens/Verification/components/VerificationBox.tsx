import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const VerificationBox = () => {
  return <TextInput style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e0e0e0',
    elevation: 5,
  },
});

export default VerificationBox;
