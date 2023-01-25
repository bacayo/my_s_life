import {View, Linking, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';

import styles from './CameraScreen.Styles';
import Navbar from '../../components/Navbar';
import {
  useCameraDevices,
  Camera,
  CameraDevice,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FeedStackParamList} from '../../infrastructure/types/nav.types';

const CameraScreen = () => {
  // const devices = useCameraDevices('wide-angle-camera');
  const devices = useCameraDevices();
  const device: CameraDevice | undefined = devices.back;

  const navigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  useEffect(() => {
    requestCameraPermission();
  }, []);

  // Camera permission
  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') {
      await Linking.openSettings();
    }
  }, []);

  if (device == null) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar
        iconName="cross"
        navbarText="New Post"
        onPress={() => {
          navigation.navigate('Feed');
        }}
      />
      {/* Camera */}
      <Camera
        style={styles.cameraView}
        device={device}
        isActive={true}
        enableZoomGesture
      />
      <View style={styles.cameraButtonWrapper}>
        <View style={styles.cameraButtonTitleWrapper}>
          <Text style={styles.buttonTitle}>Add Photo</Text>
        </View>
        <View style={styles.cameraButton} />
      </View>
    </View>
  );
};

export default CameraScreen;
