import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../Contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

function Address() {
  const { setAddressDetails } = useContext(UserContext);
  const navigation = useNavigation();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleNext = () => {
    setAddressDetails({ address, city, zip });
    navigation.navigate('Profile'); 
  };

  return (
    <View style={styles.container}>
      <Text>Address Details:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter address'
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter city'
        value={city}
        onChangeText={text => setCity(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder='Enter zip code'
        value={zip}
        onChangeText={text => setZip(text)}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    backgroundColor: '#e8daef',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default Address;
