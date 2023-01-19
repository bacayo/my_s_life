import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './infrastructure/types/nav.types';

import LoginSignup from './screens/LoginSignup';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import ChangePassword from './screens/ChangePassword';
import SignUpDetail from './screens/SignUpDetail';
import Verification from './screens/Verification';
import Welcome from './screens/Welcome';
import TermsAndConditions from './screens/TermsAndConditions';
import BottomTab from './navigation/BottomTab';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginSignUp"
          component={LoginSignup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpDetail"
          component={SignUpDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        {/* Bottom Tab Navigation */}
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
