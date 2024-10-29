// FlightBookingForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import CustomDatePicker from './CustomDatePicker';
import { useGuest } from '../context/GuestContext'; // Import the Guest Context

const FlightBookingForm = () => {
  const { saveGuestData } = useGuest(); // Access the saveGuestData function
  const [flightType, setFlightType] = useState('oneWay');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleFlightTypeChange = (value) => {
    setFlightType(value);
    setShowReturnDate(value === 'twoWay');
  };

  const handleBookingSubmit = () => {
    // Create booking data object
    const bookingData = {
      flightType,
      fromLocation,
      toLocation,
      departureDate,
      returnDate: showReturnDate ? returnDate : null,
      adults,
      children,
      infants,
    };

    // Save booking data in guest context
    saveGuestData(bookingData);

    // Optionally, you could display a success message
    console.log('Flight Booking Data:', bookingData);
    navigate('/search-results');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Flight Booking</Text>

      {/* Flight Type */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Flight Type:</Text>
        <Picker
          selectedValue={flightType}
          style={styles.picker}
          onValueChange={handleFlightTypeChange}
        >
          <Picker.Item label="One-way" value="oneWay" />
          <Picker.Item label="Round-trip" value="twoWay" />
        </Picker>
      </View>

      {/* From and To Locations */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>From:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter departure location"
          value={fromLocation}
          onChangeText={setFromLocation}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>To:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter destination"
          value={toLocation}
          onChangeText={setToLocation}
        />
      </View>

      {/* Departure Date */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Departure Date:</Text>
        <CustomDatePicker date={departureDate} onDateChange={setDepartureDate} />
      </View>

      {/* Return Date */}
      {showReturnDate && (
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Return Date:</Text>
          <CustomDatePicker date={returnDate} onDateChange={setReturnDate} />
        </View>
      )}

      {/* Number of Passengers */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Adults:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(adults)}
          onChangeText={(value) => setAdults(Number(value))}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Children:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(children)}
          onChangeText={(value) => setChildren(Number(value))}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Infants:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(infants)}
          onChangeText={(value) => setInfants(Number(value))}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonWrapper}>
        <Button title="Book Flight" onPress={handleBookingSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default FlightBookingForm;
