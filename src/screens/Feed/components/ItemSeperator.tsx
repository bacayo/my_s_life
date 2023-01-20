import {View, StyleSheet} from 'react-native';
import React from 'react';

export const ItemSeperator = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#DADADA',
    height: 1,
  },
});
