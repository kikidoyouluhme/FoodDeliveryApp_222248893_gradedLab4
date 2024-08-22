import React, { useContext } from 'react'; 
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { UserContext } from '../Contexts/UserContext'; 

function Profile() {
  const { userdetails } = useContext(UserContext); 
   const{addressDetails}=useContext(UserContext);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userdetails.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userdetails.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{userdetails.phone}</Text>
      </View>


      <View style={styles.detailsContainer}>
      <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{addressDetails.address}</Text>

        <Text style={styles.label}>City:</Text>
        <Text style={styles.value}>{addressDetails.city}</Text>

        <Text style={styles.label}>Zip Code:</Text>
        <Text style={styles.value}>{addressDetails.zip}</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailsContainer: {
    backgroundColor: '#e8daef',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Profile;
