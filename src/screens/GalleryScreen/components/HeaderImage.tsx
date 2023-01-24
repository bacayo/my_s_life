import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import GalleryIconCard from '../../../components/GalleryIconCard';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TagStackParamList} from '../../../infrastructure/types/nav.types';

const HeaderImage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TagStackParamList>>();

  const handleCameraNavigation = () => {
    navigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/Header.png')}
      />
      <GalleryIconCard onCamera={handleCameraNavigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default HeaderImage;
