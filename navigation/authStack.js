import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignInScreen} options={{ title: '', headerStyle:{backgroundColor:'#0b3188'}}} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ title: '', headerStyle:{backgroundColor:'#0b3188'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}