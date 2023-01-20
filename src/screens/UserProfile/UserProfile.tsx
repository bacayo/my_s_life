import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FeedStackParamList} from '../../infrastructure/types/nav.types';

import styles from './UserProfile.Styles';
import Navbar from '../../components/Navbar';
import Tag from '../SignUpDetail/components/Tag';
import UserProfileHeader from './components/UserProfileHeader';
import UserProfileInfo from './components/UserProfileInfo';
import UserButton from '../../components/UserButton/UserButton';

type Props = NativeStackScreenProps<FeedStackParamList, 'UserProfile'>;

const UserProfile = ({route}: Props) => {
  const {name, age} = route.params;

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar navbarText={name} />
      {/* Header background , profile photo , name */}
      <View style={{flex: 1, gap: 40}}>
        <UserProfileHeader name={name} />
        {/* Mid content */}
        <View style={styles.midContentWrapper}>
          <Text style={styles.midContentHeader}>
            my message to my s life community
          </Text>
          <Text style={styles.description}>
            line description will be here. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do
          </Text>
          {/* Tags */}
          <View style={styles.tagWrapper}>
            <Tag title="Menopause" />
            <Tag title="Pre-menopause" />
          </View>
          {/* Age and date */}
          <View style={styles.profileInfoWrapper}>
            <UserProfileInfo iconName="cycle" text={String(age) + ' Y.O'} />
            <UserProfileInfo iconName="calendar" text="27 Jul, 2018" />
          </View>
          {/* Edit Profile Button */}
          <UserButton
            onPress={null}
            styleButton={styles.btn}
            styleTitle={styles.btnTitle}
            title="Edit Profile"
          />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
