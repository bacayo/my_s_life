import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import GalleryIconCard from '../../../components/GalleryIconCard';

const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/Header.png')}
      />
      <GalleryIconCard onPress={null} />
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
