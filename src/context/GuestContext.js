// GuestContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for Guest User
const GuestContext = createContext();

// Custom Hook to use Guest Context
export const useGuest = () => {
  return useContext(GuestContext);
};

// Provider Component
export const GuestProvider = ({ children }) => {
  const [guestData, setGuestData] = useState(null);

  const saveGuestData = (data) => {
    setGuestData(data);
  };

  return (
    <GuestContext.Provider value={{ guestData, saveGuestData }}>
      {children}
    </GuestContext.Provider>
  );
};