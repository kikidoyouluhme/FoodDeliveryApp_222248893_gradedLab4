import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { CartContext } from "../Contexts/CartContext";

function Cart() {
  const { products,setProducts } = useContext(CartContext);
   const buy=()=>{
    setProducts([]);
   }
   const removeItem = (itemToRemove) => {
    const updatedProducts = products.filter((item) => item !== itemToRemove);
    setProducts(updatedProducts);
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.head}>Your items:</Text>
      {products.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        
        products.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.Price}</Text>
            <Button title='Remove' onPress={() => removeItem(item)} /> 
          </View>
        ))
      )}
       <Button title='Buy' onPress={buy} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fad7a0',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
  },
  itemContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
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

export default Cart;
