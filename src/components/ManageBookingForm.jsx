import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ManageBookingForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Booking Form</Text>
      <TextInput style={styles.input} placeholder="Enter PNR" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <Button title="Manage Booking" onPress={() => console.log('Booking Managed')} />
    </View>
  );
};

export default ManageBookingForm;

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