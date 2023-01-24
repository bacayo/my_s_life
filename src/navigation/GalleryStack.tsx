import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TagStackParamList} from '../infrastructure/types/nav.types';
import TagCaptionScreen from '../screens/TagCaptionScreen';
import GalleryScreen from '../screens/GalleryScreen';
import CameraScreen from '../screens/CameraScreen';

const TagStack = createNativeStackNavigator<TagStackParamList>();

const GalleryStack = () => {
  return (
    <TagStack.Navigator>
      <TagStack.Screen
        name="Tag"
        component={TagCaptionScreen}
        options={{
          headerShown: false,
        }}
      />
      <TagStack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          headerShown: false,
        }}
      />
      <TagStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
        }}
      />
    </TagStack.Navigator>
  );
};

export default GalleryStack;
