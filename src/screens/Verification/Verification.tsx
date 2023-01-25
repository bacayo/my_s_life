import {View, Text} from 'react-native';
import React from 'react';

import styles from './Verification.Styles';
import VerificationBox from './components/VerificationBox';
import UserButton from '../../components/UserButton/UserButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../infrastructure/types/nav.types';
import {strings} from '../../constants/strings';

const Verification = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      {/* InnerContainer */}
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Verification</Text>
        </View>
        {/* Content */}
        <View style={styles.contentWrapper}>
          <Text style={styles.verificationMessage}>
            {strings.verificationMessage}
          </Text>
          {/* Input boxes */}
          <View style={styles.boxContainer}>
            <VerificationBox />
            <VerificationBox />
            <VerificationBox />
            <VerificationBox />
          </View>
          {/* Message */}
          <View style={styles.messageWrapper}>
            <Text style={styles.verificationMessage}>
              {strings.confirmCodeMessage}
            </Text>
            <Text style={[styles.verificationMessage, styles.questionText]}>
              Send it again
            </Text>
          </View>
          {/* Validation button */}
          <UserButton
            onPress={handleNavigation}
            title={strings.validate}
            styleButton={styles.valBtn}
            styleTitle={styles.valBtnTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default Verification;
