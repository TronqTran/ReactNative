// navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screen/2_c';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="2_c" component={Screen1} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;