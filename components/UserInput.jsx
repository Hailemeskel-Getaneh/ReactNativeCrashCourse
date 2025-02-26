import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.result}>Hello, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop:10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4caf50',
  },
});
