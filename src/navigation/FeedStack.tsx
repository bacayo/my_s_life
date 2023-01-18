import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedStackParamList} from '../infrastructure/types/nav.types';
import Feed from '../screens/Feed';

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
    </FeedStackNav.Navigator>
  );
};

export default FeedStack;
