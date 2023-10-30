import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen01 from '../week7/components/API_Sreen_01'
import Screen02 from '../week7/components/API_Sreen_02'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Screen01' component={Screen01}/>
        <Stack.Screen name='Screen02' component={Screen02}/>       
      </Stack.Navigator>

    </NavigationContainer>
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
