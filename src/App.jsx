import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './pages/HomePage';
import { GuestProvider } from './context/GuestContext';
import SearchResults from './pages/SearchResults';
// About Screen
function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Link to="/">
        <Button title="Go to Home" />
      </Link>
    </View>
  );
}

export default function App() {
  return (
    <GuestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
    </GuestProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
