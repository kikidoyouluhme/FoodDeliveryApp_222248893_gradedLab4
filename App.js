import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from "./Contexts/CartContext";
import { UserProvider } from './Contexts/UserContext';
import PaymentDetails from './components/PaymentDetails';
import Profile from './components/Profile';
import UserDetails from './components/UserDetails';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Address from './components/Address';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
            <Stack.Screen name="Address" component={Address} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </CartProvider>
  );
}

