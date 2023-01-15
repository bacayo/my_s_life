import {View, Text} from 'react-native';
import React from 'react';
import {strings} from '../../constants/strings';

import styles from './SignUpScreen.Styles';
import UserButton from '../../components/UserButton/UserButton';
import InputBox from '../../components/InputBox/InputBox';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{strings.signUp}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <InputBox label={strings.email} />
        <InputBox label={strings.mobile} />
        <InputBox label={strings.password} />
        <InputBox label={strings.confirm + ' ' + strings.password} />
        <UserButton
          onPress={null}
          title={strings.next}
          styleButton={styles.button}
          styleTitle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
