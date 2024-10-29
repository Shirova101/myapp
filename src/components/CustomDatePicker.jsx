// CustomDatePicker.js
import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const CustomDatePicker = ({ date, onDateChange }) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(date || new Date());

  const incrementDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const decrementDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleConfirm = () => {
    onDateChange(selectedDate);
    setShow(false);
  };

  return (
    <View>
      <Button title="Select Date" onPress={() => setShow(true)} />
      <Modal visible={show} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Selected Date:</Text>
            <Text style={styles.dateText}>{selectedDate.toLocaleDateString()}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Previous Day" onPress={decrementDate} />
              <Button title="Next Day" onPress={incrementDate} />
            </View>
            <Button title="Confirm" onPress={handleConfirm} />
            <Button title="Cancel" onPress={() => setShow(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
});

export default CustomDatePicker;
