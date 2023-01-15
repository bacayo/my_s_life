import {View, Image, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './LoginSignup.Styles';
import UserButton from '../../components/UserButton/UserButton';
import {strings} from '../../constants/strings';
import {RootStackParamList} from '../../infrastructure/types/nav.types';

const LoginSignup = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Navigate to sign up screen
  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  // Navigate to login screen
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/logo.png')}
        />
      </View>
      <View style={styles.middleContainer}>
        <UserButton
          onPress={navigateSignUp}
          styleButton={styles.button}
          styleTitle={[styles.signUpTitle, styles.text]}
          title={strings.signUpButtonTitle}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.loginContainer}>
          <Text style={[styles.text, styles.accountText]}>
            {strings.loginSignUpScreenText}
          </Text>
          <UserButton
            onPress={navigateLogin}
            styleButton={styles.loginButton}
            styleTitle={[styles.text, styles.loginButtonTitle]}
            title={strings.loginButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginSignup;
