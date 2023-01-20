import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const HeaderImage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../../assets/icons/background.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default HeaderImage;
