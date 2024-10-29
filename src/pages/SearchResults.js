// SearchResults.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useGuest } from '../context/GuestContext';

const SearchResults = () => {
  const { guestData } = useGuest();
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Simulate fetching available flights based on guest data
    const fetchFlights = () => {
      const simulatedFlights = [
        {
          id: '1',
          flightNumber: 'FL123',
          from: guestData.fromLocation,
          to: guestData.toLocation,
          departureDate: guestData.departureDate.toLocaleDateString(),
          returnDate: guestData.returnDate ? guestData.returnDate.toLocaleDateString() : null,
          price: '$200',
        },
        {
          id: '2',
          flightNumber: 'FL456',
          from: guestData.fromLocation,
          to: guestData.toLocation,
          departureDate: guestData.departureDate.toLocaleDateString(),
          returnDate: guestData.returnDate ? guestData.returnDate.toLocaleDateString() : null,
          price: '$250',
        },
      ];
      setFlights(simulatedFlights);
    };

    fetchFlights();
  }, [guestData]);

  const handleBookFlight = (flight) => {
    // Implement flight booking logic
    console.log(`Booking flight: ${flight.flightNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Flights</Text>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.flightItem}>
            <Text>Flight Number: {item.flightNumber}</Text>
            <Text>From: {item.from}</Text>
            <Text>To: {item.to}</Text>
            <Text>Departure Date: {item.departureDate}</Text>
            {item.returnDate && <Text>Return Date: {item.returnDate}</Text>}
            <Text>Price: {item.price}</Text>
            <Button title="Book Flight" onPress={() => handleBookFlight(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  flightItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default SearchResults;
