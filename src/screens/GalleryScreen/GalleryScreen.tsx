import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../../components/Navbar';

import {GALLERY_IMAGE} from '../../data/galleryImage';
import {GalleryImagesInterface} from '../../infrastructure/types/types';
import ImageCard from './components/ImageCard';
import styles from './GalleryScreen.Styles';
import HeaderImage from './components/HeaderImage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FeedStackParamList} from '../../infrastructure/types/nav.types';

const GalleryScreen = () => {
  // When pressed on image change top image to pressed image
  const [_, setImage] = useState(GALLERY_IMAGE[0].image);

  const navigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  // Handle navbar navigation
  const handleNavbarNavigation = () => {
    navigation.navigate('Feed');
  };

  //render gallery images
  const renderImages: ListRenderItem<GalleryImagesInterface> = ({item}) => {
    return (
      <ImageCard image={item.image} onPress={() => setImage(item.image)} />
    );
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar
        iconName="cross"
        navbarText="New Post"
        onPress={handleNavbarNavigation}
      />
      <View style={styles.imageList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={GALLERY_IMAGE}
          renderItem={renderImages}
          numColumns={4}
          ListHeaderComponent={<HeaderImage />}
        />
      </View>
    </View>
  );
};

export default GalleryScreen;
