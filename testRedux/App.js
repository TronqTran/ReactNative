import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import react, {useState} from 'react'
import {Provider} from 'react-redux'

import increment from './redux/actions'
import store from './redux/store'
import Counter from './Counter'


export default function App() {
const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
