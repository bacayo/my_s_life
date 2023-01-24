import {View} from 'react-native';
import React from 'react';

import styles from './CameraScreen.Styles';
import Navbar from '../../components/Navbar';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar iconName="cross" navbarText="New Post" onPress={null} />
    </View>
  );
};

export default CameraScreen;
