import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You clicked the button.');
  };

  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={handlePress} color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
