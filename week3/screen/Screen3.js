import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Khoa */}
        <View style={styles.logo}></View>
      </View>
      <Text style={styles.title}>FORGET</Text>
      <Text style={styles.title}>PASSWORD</Text>
      <Text style={styles.description}>
       Provide your account's email address for which you want to reset your password
      </Text>
        <TextInput style={styles.input} placeholder="Email" />
      <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.buttonText}>NEXT</Text>
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
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 15,
    marginBottom: 10,
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
  buttonNext: {
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