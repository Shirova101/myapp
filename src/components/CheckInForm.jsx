import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CheckInForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check In Form</Text>
      <TextInput style={styles.input} placeholder="Enter PNR" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <Button title="Check In" onPress={() => console.log('Checked In')} />
    </View>
  );
};

export default CheckInForm;

// Styles using createStylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 250,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});