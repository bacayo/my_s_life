import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedStackParamList} from '../infrastructure/types/nav.types';
import Feed from '../screens/Feed';
import UserProfile from '../screens/UserProfile';

const FeedStackNav = createNativeStackNavigator<FeedStackParamList>();

const FeedStack = () => {
  return (
    <FeedStackNav.Navigator>
      <FeedStackNav.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <FeedStackNav.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
    </FeedStackNav.Navigator>
  );
};

export default FeedStack;
