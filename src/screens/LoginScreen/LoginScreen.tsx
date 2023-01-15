import {View, Text} from 'react-native';
import React from 'react';

import styles from './LoginScreen.Styles';
import InputBox from '../../components/InputBox/InputBox';

import CheckBox from '../../components/CheckBox/CheckBox';
import UserButton from '../../components/UserButton/UserButton';
import {strings} from '../../constants/strings';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../infrastructure/types/nav.types';

const LoginScreen = () => {
  const [checked, setChecked] = React.useState(false);

  //define navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Navigate Welcom screen when pressed sign in button
  const handleSignIn = () => {
    navigation.navigate('Welcome');
  };
  // Navigate to ForgotPassword screen when pressed forgot password text
  const handlePassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{strings.singIn}</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.inputWrapper}>
          <InputBox label={strings.email} />
          <InputBox label={strings.password} />
          <View style={styles.bottomWrapper}>
            <View style={styles.bottomWrapperOptions}>
              <CheckBox checked={checked} setChecked={setChecked} />
              <Text style={styles.bottomWrapperItemsText}>
                {strings.remember}
              </Text>
            </View>
            <Text
              onPress={handlePassword}
              style={styles.bottomWrapperItemsText}>
              {strings.forgotPassword}
            </Text>
          </View>
          <UserButton
            onPress={handleSignIn} // navigate to welcome Screen
            title={strings.singIn}
            styleTitle={styles.signInBtnTitle}
            styleButton={styles.signInBtn}
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </View>
  );
};

export default LoginScreen;
