import {ScrollView, View} from 'react-native';
import React from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Navbar from '../../components/Navbar';
import UserProfileHeader from '../UserProfile/components/UserProfileHeader';
import {FeedStackParamList} from '../../infrastructure/types/nav.types';
import styles from './EditProfile.Styles';
import EditProfileInputBox from './components/EditProfileInputBox';
import {colors} from '../../infrastructure/theme/colors';
import Tag from '../SignUpDetail/components/Tag';
import AddNewTag from './components/AddNewTag';
import UserButton from '../../components/UserButton/UserButton';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<FeedStackParamList, 'EditProfile'>;

const EditProfile = ({route}: Props) => {
  const {name, age} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  const handleUserNavigation = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: colors.white}}>
      {/* Navbar */}
      <Navbar navbarText={name} />
      {/* User Profile Header */}
      <View style={styles.userProfileHeaderWrapper}>
        <UserProfileHeader name={name} />
      </View>
      {/* Mid content && inputs */}
      <View style={styles.midContentWrapper}>
        <EditProfileInputBox
          icon={true}
          iconName="chevron-down"
          title={'Private'}
          titleColor={colors.black}
          iconColor={colors.black}
        />
        <EditProfileInputBox
          icon={false}
          iconName={''}
          title={name}
          titleColor={colors.black}
        />
        <EditProfileInputBox
          icon={false}
          iconName=""
          title={'My message to My S Life Community'}
          titleColor={colors.dark}
        />
        <EditProfileInputBox
          icon={false}
          iconName=""
          title={
            ' line description will be here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
          }
          titleColor={colors.gray}
        />
        {/* Tags */}
        <View style={styles.diseaseWrapper}>
          <Tag title="Menopause" />
          <Tag title="Pre-Menopause" />
        </View>
        <AddNewTag iconName="plus" />
        <EditProfileInputBox
          icon={true}
          iconName="calendar-alt"
          title="17-07-2018"
          titleColor={colors.dark}
          iconColor={colors.gray}
        />
        <EditProfileInputBox
          icon={true}
          iconName="calendar-alt"
          title={age + ' Y.O'}
          titleColor={colors.dark}
          iconColor={colors.gray}
        />
        <View style={styles.btnWrapper}>
          <UserButton
            title="Save"
            styleButton={styles.btn}
            styleTitle={styles.btnTitle}
            onPress={handleUserNavigation}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
