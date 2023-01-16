import {View, Text} from 'react-native';
import React from 'react';

import styles from './Welcome.Styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>
          Welcome To{' '}
          <Text style={[styles.header, styles.headerTitle]}>My S Life</Text>
        </Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Text>
      </View>
      <View style={{flex: 0.2}} />
    </View>
  );
};

export default Welcome;
