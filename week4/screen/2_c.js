import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button, StyleSheet } from 'react-native';

export default function App() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(0);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeSymbol, setIncludeSymbol] = useState(false);

    const generatePassword = () => {
        let password = "";
        const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseLetters = lowerCaseLetters.toUpperCase();
        const numbers = "0123456789";
        const specialSymbols = "!@#$%^&*()_+{}:\"<>?~`-=[];',./";
        
        if (includeLowercase) {
            password += getRandomCharacter(lowerCaseLetters);
        }
        
        if (includeUppercase) {
            password += getRandomCharacter(upperCaseLetters);
        }

        if (includeNumber) {
            password += getRandomCharacter(numbers);
        }
        
        if (includeSymbol) {
            password += getRandomCharacter(specialSymbols);
        }
        
        while (password.length < passwordLength) {
            const characters = (includeLowercase ? lowerCaseLetters : "")
            + (includeUppercase ? upperCaseLetters : "")
            + (includeNumber ? numbers : "")
            + (includeSymbol ? specialSymbols : "");
            
            password += getRandomCharacter(characters);
        }
        
        setPassword(password);
};
const getRandomCharacter = (characters) => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <TextInput
        style={styles.ouput}
        value={password}
      />
      <View style={styles.checkbox}>
        <View>
            <Text style={styles.text}>Password length</Text>
            <Text style={styles.text}>Include lower case letters</Text>
            <Text style={styles.text}>Include uppercase letters</Text>
            <Text style={styles.text}>Include number</Text>
            <Text style={styles.text}>Include special symbol</Text>
        </View>
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setPasswordLength}
                value={passwordLength}
                keyboardType="numeric"
            />
            <CheckBox
            value={includeLowercase}
            onValueChange={setIncludeLowercase}
            style={styles.checkbox}
            />
            <CheckBox
            value={includeUppercase}
            onValueChange={setIncludeUppercase}
            style={styles.checkbox}
            />
            <CheckBox
                value={includeNumber}
                onValueChange={setIncludeNumber}
                style={styles.checkbox}
            />
            <CheckBox
                value={includeSymbol}
                onValueChange={setIncludeSymbol}
                style={styles.checkbox}
            />
        </View>
      </View>
      <Button
        title="GENERATE PASSWORD"
        onPress={generatePassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#330099',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 30,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 12,
    color: '#fff',
    width: 50,
  },
  ouput: {
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
    color: '#fff',
    fontSize: 24,
  },
  text: {
    color: '#fff',
    marginBottom: 12,
    fontSize: 20,
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
});
