import {Pressable, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  image: ImageSourcePropType;
  onPress: any;
};

const ImageCard = ({image, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    marginVertical: '2%',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default ImageCard;
