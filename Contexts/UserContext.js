import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [paymentDetails, setPaymentDetails] = useState({
    credit: '',
    expiration: '',
    cvv: ''
  });
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    city: '',
    zip: ''
  });

  return (
    <UserContext.Provider value={{ userdetails, setUserdetails, paymentDetails, setPaymentDetails, addressDetails, setAddressDetails }}>
      {children}
    </UserContext.Provider>
  );
};
