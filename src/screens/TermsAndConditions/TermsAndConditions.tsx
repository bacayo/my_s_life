import {View, ScrollView} from 'react-native';
import React from 'react';
import UserButton from '../../components/UserButton/UserButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './TermsAndConditions.Styles';
import TermsText from './components/TermsText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../infrastructure/types/nav.types';

const TermsAndConditions = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.headerWrapper}>
        <Icon
          onPress={handleNavigation}
          name="arrow-left"
          size={16}
          color="#2E3A59"
        />
        <UserButton
          onPress={null}
          title="Privacy Policy"
          styleTitle={styles.headerBtnTitle}
          styleButton={styles.headerBtn}
        />
      </View>
      <View style={styles.terms}>
        <TermsText />
        <TermsText />
        <TermsText />
        <TermsText />
        <TermsText />
        <TermsText />
        <TermsText />
        <TermsText />
        <TermsText />
      </View>
    </ScrollView>
  );
};

export default TermsAndConditions;
