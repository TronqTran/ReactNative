import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Logo hình tròn */}
        <View style={styles.logo}></View>
      </View>
      <Text style={styles.title}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>
      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.button}>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignup}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.bottomtext}>
      <Text style={styles.description}>HOW WE WORK?</Text>
      </View>
      
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
  button: {
    flexDirection: 'row', // Sắp xếp hai nút theo chiều ngang
    justifyContent: 'space-around', // Tạo khoảng cách giữa hai nút
    width: 300,
  },
  buttonLogin: {
    backgroundColor: '#FFCC00',
    padding: 15,
    width: '35%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonSignup: {
    backgroundColor: '#FFCC00',
    padding: 15,
    width: '35%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black', 
    fontWeight: 'bold',
  },
  bottomtext: {
    marginTop: 100,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
});
export default App;