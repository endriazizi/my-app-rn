import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './shared/Header';


export default function App() {
  return (
    <View style={styles.container}>
       {/* <Text>Open up App.js to start working on your app!</Text>
       <StatusBar style="auto" /> */}
       <Header />
       <ProductContainer/>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
