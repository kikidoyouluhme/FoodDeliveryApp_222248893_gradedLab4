import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../Contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

function UserDetails() {
  const navigation = useNavigation();
  const { userdetails, setUserdetails } = useContext(UserContext);

  const [name, setName] = useState(userdetails.name);
  const [email, setEmail] = useState(userdetails.email);
  const [phone, setPhone] = useState(userdetails.phone);

  const proceedPayment = () => {
    
    setUserdetails({ name, email, phone });
    
    navigation.navigate('PaymentDetails');
  };

  return (
    <View>
      <Button title="Payment" onPress={proceedPayment} />
      
      <Text>User Details:</Text>
      <View>
        <Text>NAME:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter name'
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View>
        <Text>EMAIL:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View>
        <Text>PHONE:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter phone number'
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>
    </View>
  );
}

export default UserDetails;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8daef',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
