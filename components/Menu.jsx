import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from "../Contexts/CartContext";
import Cart from '../components/Cart'; 

import Profile from '../components/Profile';
import UserDetails from '../components/UserDetails';

function Menu() {
  const { products, setProducts } = useContext(CartContext);
  const navigation = useNavigation(); 

  const menuItems = [
    {
      image: require('../assets/kota.jpg'),
      name: 'Kota',
      description: 'Savor the rich and hearty flavors of a traditional South African kota! This iconic street food is a must-try, featuring a quarter loaf of bread hollowed out and packed with delicious fillings. Indulge in layers of crispy fries, juicy polony, Vienna sausages, fresh egg, and a mouthwatering blend of sauces. Perfectly crafted to satisfy your hunger, the kota is more than just a meal—its an experience!',
      Price: 'R40'
    },
    {
      image: require('../assets/school boy.jpg'),
      name: 'School Boy Sandwich',
      description: "Indulge in the classic taste of nostalgia with our School Boy Sandwich! This iconic South African favorite features a hearty combination of fresh bread, juicy polony, crispy fried egg, and tangy tomato sauce. Each bite delivers a satisfying blend of savory flavors and textures, perfect for a quick lunch or a comforting snack. Whether you’re reminiscing about school days or simply craving a delicious and filling sandwich, the School Boy Sandwich is sure to hit the spot!",
      Price: 'R65'
    },
    {
      image: require('../assets/dunked wings.jpg'),
      name: 'Dunked Wings',
      description: "Savor the flavor-packed goodness of our Dunked Wings! These succulent chicken wings are expertly fried to a crispy perfection and then generously dunked in your choice of mouthwatering sauces.",
      Price: 'R95'
    },
    {
      image: require('../assets/sushi.jpg'),
      name: 'Sushi',
      description: 'Delight in the artistry and freshness of our Sushi! Each piece is meticulously crafted with premium ingredients, featuring a perfect balance of delicate fish, seasoned rice, and crisp vegetables. From classic rolls like Tuna and Avocado to inventive combinations like Spicy Salmon and Mango, our sushi offers a symphony of flavors and textures that will tantalize your taste buds.',
      Price: 'R200'
    },
    {
      image: require('../assets/wings and chips.jpg'),
      name: 'Wings & Chips',
      description: 'Enjoy a satisfying combo with our Wings & Chips! Our crispy, juicy chicken wings are seasoned to perfection and served alongside a generous portion of golden, crispy fries.',
      Price: 'R150'
    },
    {
      image: require('../assets/chicken Roti.jpg'),
      name: 'Chicken Roti',
      description: 'Experience a flavorful fusion with our Chicken Roti! This savory delight features tender, spiced chicken cooked to perfection and wrapped in a soft, warm roti.',
      Price: 'R30'
    }
  ];

  const AddCart = (item) => {
    setProducts((products) => [...products, item]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.head}>DeLivery Expo Go</Text>
      <View style={styles.topIconsContainer}>
        <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
       {/* <Button title="Payment" onPress={() => navigation.navigate('PaymentDetails')} />*/}
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="User" onPress={() => navigation.navigate('UserDetails')} />
      </View>
      
      {menuItems.map((item) => (
        <View key={item.name} style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.Price}</Text>
          <Button title='ADD TO CART' onPress={() => AddCart(item)} />
        </View>
      ))}
    </ScrollView>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor:'#fad7a0',
  },
  head: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },
  topIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor:'#fad7a0',
  },
  itemContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor:'white',
    padding: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
});