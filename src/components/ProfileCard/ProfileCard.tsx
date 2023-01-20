import {View, Text, Image} from 'react-native';
import React from 'react';
import {DataInterface} from '../../data/profileData';
// import ArrowRight from '../IconComponent/ArrowRight';
import {ArrowRight} from '../IconComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './ProfileCard.Styles';
import SvgLikesLogo from '../IconComponent/LikesLogo';
import {useNavigation} from '@react-navigation/native';
import {FeedStackParamList} from '../../infrastructure/types/nav.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ProfileCard = ({
  name,
  disease,
  lastSeen,
  description,
  likes,
  reply,
  id,
  age,
}: DataInterface) => {
  const imagePath = '../../assets/icons/profile1.png';

  const navigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  const handleUserNavigation = () => {
    navigation.navigate('UserProfile', {
      id,
      name,
      disease,
      age,
    });
  };

  //! Press like button and change backgrouncolor and like button color
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topWrapper}>
        <Image style={styles.image} source={require(imagePath)} />
        <View style={styles.innerContainer}>
          <View style={styles.nameWrapper}>
            <Text onPress={handleUserNavigation} style={styles.name}>
              {name}
            </Text>
            <Text style={styles.lastSeen}>{lastSeen}</Text>
          </View>
          {/* Arrow Right */}
          <View style={styles.arrowRightWrapper}>
            <ArrowRight />
            {/* <IconSvg name="arrowRight" width={14} height={14} /> */}
          </View>
        </View>
        <Text style={styles.headerText}>Endogirls et travail</Text>
      </View>
      {/* Description */}
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.social}>
          <SvgLikesLogo />
          <Text style={styles.likes}>{likes}K</Text>
          <Icon name="comment" size={14} />
          <Text style={styles.likes}>{reply}</Text>
        </View>
        <View style={styles.diseaseWrapper}>
          <Text style={styles.disease}>{disease}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
