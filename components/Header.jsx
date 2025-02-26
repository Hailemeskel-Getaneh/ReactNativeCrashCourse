import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My App Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ea',
    padding: 20,
    width:'100%'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
