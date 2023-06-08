import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Shopping from '../screens/Shopping';
import AddItem from '../screens/AddItem';
import UpdateData from '../screens/UpdateData';
import UDShop from '../screens/UDShop';
import ViewItem from '../screens/ViewItem';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shopping" component={Shopping} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="UpdateData" component={UpdateData} />
        <Stack.Screen name="UDShop" component={UDShop} />
        <Stack.Screen name="ViewItem" component={ViewItem} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}