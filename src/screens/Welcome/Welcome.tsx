import {View, Text} from 'react-native';
import React from 'react';

import styles from './Welcome.Styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../infrastructure/types/nav.types';
import {strings} from '../../constants/strings';

const Welcome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.navigate('Tab');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>
          Welcome To{' '}
          <Text style={[styles.header, styles.headerTitle]}>
            {strings.companyName}
          </Text>
        </Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{strings.loremIpsum}</Text>
      </View>
      <View
        style={{flex: 0.2, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text onPress={handleNavigation} style={styles.footerTitle}>
          Skip
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
