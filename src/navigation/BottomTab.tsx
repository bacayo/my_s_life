import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../infrastructure/types/nav.types';
import MapStack from './MapStack';
import EventStack from './EventStack';
import ChatListStack from './ChatListStack';
import FeedStack from './FeedStack';

import SvgIcon from '../components/IconComponent/SvgIcon';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator<RootTabParamList>();

type Props = {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
};

const TabBarIcon = ({route}: Props) => {
  let iconName: string = '';

  if (route.name === 'FeedStack') {
    iconName = 'home';
  } else if (route.name === 'MapStack') {
    iconName = 'map';
  } else if (route.name === 'ChatStack') {
    iconName = 'chat';
  } else if (route.name === 'EventStack') {
    iconName = 'event';
  }
  return <SvgIcon name={iconName} width={24} height={24} />;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //! look for warning
        tabBarIcon: () => {
          return <TabBarIcon route={route} />;
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
      <Tab.Screen name="EventStack" component={EventStack} />
      <Tab.Screen name="ChatStack" component={ChatListStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;
