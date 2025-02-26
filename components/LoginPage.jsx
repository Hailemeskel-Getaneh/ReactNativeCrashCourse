import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, TextInput } from 'react-native';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Hello', `${name}, you have successfully logged in`, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Your name ..."
        value={name}
        onChangeText={(text) => setName(text)} 
      />

      <Text style={styles.textLabel}>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Your password ..."
        value={password}
        secureTextEntry={true} // For password masking
        onChangeText={(text) => setPassword(text)} // Corrected
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center', // Center the container horizontally
    marginTop: 50, // Add some spacing from the top
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10, // Add padding for better text visibility
  },
  textLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
