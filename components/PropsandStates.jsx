import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ToggleSwitchButton = ({ isOn, toggleState }) => {
  return (
    <View>
      <TouchableOpacity onPress={toggleState} style={styles.button}>
        <Text style={styles.buttonText}>{isOn ? 'Turn Off' : 'Turn On'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ToggleSwitchApp = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        The switch is currently: {isOn ? 'ON' : 'OFF'}
      </Text>
      <ToggleSwitchButton isOn={isOn} toggleState={toggleState} />
    </View>
  );
};

export default ToggleSwitchApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  statusText: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
