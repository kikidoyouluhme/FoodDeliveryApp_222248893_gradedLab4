import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Button,TextInput } from 'react-native';
import { UserContext } from '../Contexts/UserContext';
import Address from './Address';
import { useNavigation } from '@react-navigation/native';
import{ useContext,useState } from 'react';

function PaymentDetails() {
const navigation = useNavigation(); 

const{paymentDetails, setPaymentDetails} = useContext(UserContext);

const [credit, setCredit] = useState(paymentDetails.credit);
const [expiration, setExpiration] = useState(paymentDetails.expiration);
const [cvv, setCvv] = useState(paymentDetails.cvv);



return(
 <View>
    <View>
     <Text>Credit card</Text>
        <TextInput
         placeholder='enter credit card number'
          value={credit}
          onChangeText={text => setCredit(text)} />
      </View>

      <View>
        <Text>Expiration:</Text>
        <TextInput
         
          placeholder='month/year'
          value={expiration}
          onChangeText={text => setExpiration(text)}
        />
      </View>

      <View>
        <Text>CVV:</Text>
        <TextInput
       
          placeholder='Enter Cvv code'
          value={cvv}
          onChangeText={text => setCvv(text)}
        />
      </View>
      <Button title="SUBMIT" onPress={() => navigation.navigate('Address')} />
    </View>
    
    
    
    
    
    
    
      
  
)


}
export default PaymentDetails;