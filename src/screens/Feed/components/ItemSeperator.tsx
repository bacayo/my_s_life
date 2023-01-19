import {View, StyleSheet} from 'react-native';
import React from 'react';

export const ItemSeperator = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
