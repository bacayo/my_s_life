import {View, Text} from 'react-native';
import React from 'react';
import InputBox from '../../components/InputBox/InputBox';
import UserButton from '../../components/UserButton/UserButton';
import {strings} from '../../constants/strings';

import styles from './ChangePassword.Styles';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{strings.forgotPassword}</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.inputWrapper}>
          <InputBox label={strings.new + ' ' + strings.password} />
          <InputBox label={strings.confirm + ' ' + strings.password} />
          <UserButton
            onPress={null}
            title={strings.validate}
            styleButton={styles.signInBtn}
            styleTitle={styles.signInBtnTitle}
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </View>
  );
};

export default ChangePassword;
