import {View} from 'react-native';
import React from 'react';

import styles from './TagCaptionScreen.Styles';
import Navbar from '../../components/Navbar';
import TagCaptionInputBox from './components/TagCaptionInputBox';
import UserButton from '../../components/UserButton/UserButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FeedStackParamList,
  TagStackParamList,
} from '../../infrastructure/types/nav.types';
import GalleryIconCard from '../../components/GalleryIconCard';
import {strings} from '../../constants/strings';

const TagCaptionScreen = () => {
  const feedNavigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  const galleryNavigation =
    useNavigation<NativeStackNavigationProp<TagStackParamList>>();

  // Navigate to Feed screen
  const handleNavigation = () => {
    feedNavigation.navigate('Feed');
  };

  const handleGalleryNavigation = () => {
    galleryNavigation.navigate('Gallery');
  };
  const handleCameraNavigation = () => {
    galleryNavigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      <Navbar
        navbarText="New Post"
        iconName="cross"
        onPress={handleNavigation}
      />
      {/* Content */}
      <View style={styles.content}>
        {/* Icons */}
        <GalleryIconCard
          onAddPhoto={handleGalleryNavigation}
          onCamera={handleCameraNavigation}
        />
        {/* Inputs */}
        <View style={{gap: 10}}>
          <TagCaptionInputBox placeholder="Caption" icon="" showIcon={false} />
          <TagCaptionInputBox
            placeholder="Caption Title"
            numOfLines={5}
            showIcon={false}
            icon=""
          />
          <TagCaptionInputBox
            placeholder="Select Category"
            showIcon={true}
            icon="search"
          />
        </View>
        {/* Post button */}
        <UserButton
          title={strings.post}
          styleButton={styles.btn}
          styleTitle={styles.btnTitle}
          onPress={null}
        />
      </View>
    </View>
  );
};

export default TagCaptionScreen;
