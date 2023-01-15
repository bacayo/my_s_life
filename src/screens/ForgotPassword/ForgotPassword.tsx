import {View, Text} from 'react-native';
import React from 'react';
import UserButton from '../../components/UserButton/UserButton';

import styles from './ForgotPassword.Styles';
import {strings} from '../../constants/strings';
import InputBox from '../../components/InputBox/InputBox';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../infrastructure/types/nav.types';

const ForgotPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // Navigate to ChangePassword screen
  const handleNavigation = () => {
    navigation.navigate('ChangePassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{strings.forgotPassword}</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.inputWrapper}>
          <InputBox label={strings.email} />
          <UserButton
            onPress={handleNavigation}
            title={strings.send}
            styleTitle={styles.signInBtnTitle}
            styleButton={styles.signInBtn}
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </View>
  );
};

export default ForgotPassword;
