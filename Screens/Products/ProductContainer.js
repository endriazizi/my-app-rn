import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivtyIndicator, FlatList, ScrollView, Dimensions  } from 'react-native';

import { Container, Header, Item, Text, Input, Icon, Button } from 'native-base';

import ProductList from './ProductList';
import SearchedProduct from './SearchedProduct';
import Banner from '../../shared/banner';


const data = require('../../assets/data/084 products.json')

var { height } = Dimensions.get('window')

const ProductContainer = () => {

    const [ products, setProducts ] = useState([]);
    const [ productsFiltered, setProductsFiltered ] = useState([]);
    const [ focus, setFocus ] = useState();
    
    useEffect(()=>{
        setProducts(data);
        console.log("data RISPOSTA:  ", data);

        setProductsFiltered(data);
        setFocus(false);

        return ()=> {
            // memory leack video 9 min 04:39
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
        }
    }, [])

    // Product Methods
    const searchProduct = (text) => {
        console.log("SONO NEL FILETER DEI PRODOTTI");
        setProductsFiltered(
        products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };

    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    return (
        <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input 
                placeholder="ricerca" 
                onFocus={openList}
                onChangeText={(text)=> searchProduct(text)}
            />
            {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
          </Item>
          {/* <Button transparent>
            <Text>Search</Text>
          </Button> */}
        </Header>
        {focus == true ? (
            console.log('TRUE FOCUS!!!'),
            <SearchedProduct 
                productsFiltered={productsFiltered}
            />
              

        ) : (
            console.log('FALSE FOCUS!!!'),
            // <View style={styles.container}>
            <View>
            {/* <Banner /> */}
                    <View style={{ marginTop: 100}}>
                    <FlatList 
                        // horizontal
                        data={products}
                        renderItem={({item})=> (
                            //console.log('FALSE FOCUS!!!');
                        <ProductList 
                            key={item.id}
                            item={item}
                        />)}
                        keyExtractor={item => item.name}
                    />
                </View>
            </View>     
        )}

{/* palce note here */}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      height: height,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default ProductContainer;
