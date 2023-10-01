import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.logo}>CODE</Text>
      <Text style={styles.title}>VERIFICATION</Text>
      <Text style={styles.description}>
       Enter ontime password sent on ++849092605798
      </Text>
        <TextInput style={styles.input} />
      <TouchableOpacity style={styles.buttonVerify}>
        <Text style={styles.buttonText}>VERIFI CODE</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Canh giữa theo chiều dọc
    alignItems: 'center',
    backgroundColor: '#33CCFF', // Màu nền xanh biển
    padding: 20,
  },
  logo: {
    fontSize: 75,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 50,
  },
  buttonVerify: {
    backgroundColor: '#FFCC00',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black', 
    fontWeight: 'bold',
  }
});
export default App;