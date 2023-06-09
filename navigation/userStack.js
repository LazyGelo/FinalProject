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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerStyle:{backgroundColor:'#e6e6fa'}}} />
        <Stack.Screen name="Shopping" component={Shopping} options={{ title: '', headerStyle:{backgroundColor:'#e6e6fa'} }} />
        <Stack.Screen name="AddItem" component={AddItem} options={{ title: '', headerStyle:{backgroundColor:'#e6e6fa'}}} />
        <Stack.Screen name="UpdateData" component={UpdateData} options={{ title: '', headerStyle:{backgroundColor:'#0b3188'}}} />
        <Stack.Screen name="UDShop" component={UDShop} options={{ title: '', headerStyle:{backgroundColor:'#0b3188'}}} />
        <Stack.Screen name="ViewItem" component={ViewItem} options={{ title: '', headerStyle:{backgroundColor:'#0b3188'}}} />
        <Stack.Screen name="About" component={About} options={{ title: '', headerStyle:{backgroundColor:'#0b3188'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}