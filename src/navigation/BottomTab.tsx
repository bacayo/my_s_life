import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../infrastructure/types/nav.types';
import MapStack from './MapStack';
import EventStack from './EventStack';
import ChatListStack from './ChatListStack';
import FeedStack from './FeedStack';

import SvgIcon from '../components/IconComponent/SvgIcon';
import {RouteProp} from '@react-navigation/native';
import GalleryStack from './GalleryStack';

const Tab = createBottomTabNavigator<RootTabParamList>();

type Props = {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
  width: number;
  height: number;
};

const TabBarIcon = ({route, height, width}: Props) => {
  let iconName: string = '';

  if (route.name === 'FeedStack') {
    iconName = 'home';
  } else if (route.name === 'MapStack') {
    iconName = 'map';
  } else if (route.name === 'ChatStack') {
    iconName = 'chat';
  } else if (route.name === 'EventStack') {
    iconName = 'event';
  } else if (route.name === 'GalleryStack') {
    iconName = 'mid';
  }

  return <SvgIcon name={iconName} width={width} height={height} />;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //! look for warning
        tabBarIcon: () => {
          return <TabBarIcon route={route} width={24} height={24} />;
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="FeedStack"
        component={FeedStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="MapStack" component={MapStack} />
      <Tab.Screen
        name="GalleryStack"
        component={GalleryStack}
        options={({route}) => ({
          tabBarIcon: () => {
            return <TabBarIcon route={route} width={50} height={50} />;
          },
          headerShown: false,
        })}
      />
      <Tab.Screen name="EventStack" component={EventStack} />
      <Tab.Screen name="ChatStack" component={ChatListStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;
