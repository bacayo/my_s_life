import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import DotsHorizontal from 'react-native-vector-icons/MaterialCommunityIcons';

import {FeedStackParamList} from '../../infrastructure/types/nav.types';
import styles from './UserProfile.Styles';
import Navbar from '../../components/Navbar';
import Tag from '../SignUpDetail/components/Tag';
import UserProfileHeader from './components/UserProfileHeader';
import UserProfileInfo from './components/UserProfileInfo';
import UserButton from '../../components/UserButton/UserButton';
import IconSvg from '../../components/IconComponent/SvgIcon';
import {colors} from '../../infrastructure/theme/colors';
import Socials from '../../components/ProfileCard/components/Socials';
import Disease from '../../components/ProfileCard/components/Disease';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<FeedStackParamList, 'UserProfile'>;

const UserProfile = ({route}: Props) => {
  const {name, age, lastSeen, likes, reply, disease, id} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  // Navigate to edit profile
  const handleNavigation = () => {
    navigation.push('EditProfile', {
      disease,
      name,
      id,
      age,
    });
  };

  // Navbar navigation
  const navbarNavigation = () => {
    navigation.goBack();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Navbar */}
      <Navbar
        navbarText={name}
        iconName="arrowLeft"
        onPress={navbarNavigation}
      />
      {/* Header background , profile photo , name */}
      <View style={styles.contentWrapper}>
        <View style={{height: 200}}>
          <UserProfileHeader name={name} />
        </View>
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
            onPress={handleNavigation}
            styleButton={styles.btn}
            styleTitle={styles.btnTitle}
            title="Edit Profile"
          />
          <View>
            {/* User post */}
            <View style={styles.userPostContainer}>
              <View style={styles.userPostContainerHeader}>
                <IconSvg name="pp" width={40} height={40} />
                <View>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.lastSeen}>{lastSeen}</Text>
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <DotsHorizontal
                  name="dots-horizontal"
                  size={30}
                  color={colors.darkGray}
                />
              </View>
            </View>
            <Text style={styles.post}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>
            <View style={styles.socialsWrapper}>
              <Socials likes={likes} reply={reply} />
              <Disease disease={disease} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
