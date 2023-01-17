import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './SignUpDetail.Styles';
import InputBox from '../../components/InputBox/InputBox';
import UserButtonComponent from './components/UserButtonComponent';
import Tag from './components/Tag';
import {colors} from '../../infrastructure/theme/colors';
import CheckBox from '../../components/CheckBox/CheckBox';
import {strings} from '../../constants/strings';
import UserButton from '../../components/UserButton/UserButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../infrastructure/types/nav.types';

const SignUpDetail = () => {
  const [checked, setChecked] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleToCNavigation = () => {
    navigation.navigate('TermsAndConditions');
  };

  const handleWelcomeNavigation = () => {
    navigation.navigate('Welcome');
  };

  return (
    <ScrollView style={styles.container}>
      {/* ScrollView Container */}
      <View style={styles.scrollView}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Please Complete your details</Text>
        </View>
        {/* Text Inputs */}
        <View>
          <InputBox label="Family Name" />
          <InputBox label="Name" />
        </View>
        {/* Gender selection */}
        <View style={styles.genderWrapper}>
          <Text style={styles.genderHeader}>Are you a woman?</Text>
          <View style={styles.choiceWrapper}>
            <UserButtonComponent title="Yes" />
            <UserButtonComponent title="No" />
            <UserButtonComponent title="Not defined by a genre" />
          </View>
        </View>
        {/* Birthday Input */}
        <InputBox label="Birthday" />
        {/* Messages */}
        <View style={styles.messageWrapper}>
          <Text style={styles.messageText}>
            My message to My S Life Community
          </Text>
          <UserButtonComponent title="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
          <UserButtonComponent title="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
          <UserButtonComponent title="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
        </View>
        {/* My interests section */}
        <View style={styles.interestSection}>
          <View style={styles.interestsWrapper}>
            <Text style={styles.interestText}>My Interests</Text>
            <Icon name="search" size={18} color="#bdbdbd" />
          </View>
          <View style={styles.tags}>
            <Tag title="Menopause" />
            <Tag title="Pre-menopause" />
          </View>
        </View>
        {/* Bottom Container */}
        <View>
          <Text style={styles.bottomHeader}>What are you here for?</Text>
          <View style={styles.bottomWrapper}>
            <View style={styles.bottomItemWrapper}>
              <Icon name="graduation-cap" size={30} color={colors.dark} />
              <Text style={[styles.gradText, styles.bottomItemWrapperText]}>
                I am here to learn
              </Text>
            </View>
            <View style={styles.bottomItemWrapper}>
              <Icon name="users" size={30} color={colors.gray} />
              <Text style={[styles.friendsText, styles.bottomItemWrapperText]}>
                I am here to make new friends
              </Text>
            </View>
          </View>
        </View>
        {/* Terms & Conditions */}
        <View style={styles.tacWrapper}>
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            color={colors.gray}
            uncheckedColor={colors.gray}
          />
          <Text style={styles.tocWrapperText}>
            by clicking I agree to{' '}
            <Text
              onPress={handleToCNavigation}
              style={styles.tocWrapperTextSpan}>
              terms & conditions privacy policy
            </Text>
          </Text>
        </View>
        {/* Submit button */}
        <View style={styles.submitButtonWrapper}>
          <UserButton
            title={strings.signUp}
            onPress={handleWelcomeNavigation}
            styleButton={styles.submitBtn}
            styleTitle={styles.submitBtnTitle}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpDetail;
