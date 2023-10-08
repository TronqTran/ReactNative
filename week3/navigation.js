// navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
import Screen4 from './screen/Screen4';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;