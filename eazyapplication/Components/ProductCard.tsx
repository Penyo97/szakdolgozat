import React from 'react';
import {View, StyleSheet, Text, Dimensions} from "react-native";

const ProductCard = () => {
    return (
        <View style={style.CardContainer}>
    <Text>sdf</Text>
        </View>
    );
};


export default ProductCard;

const style = StyleSheet.create({
    CardContainer:{
        backgroundColor:"#fff",
        borderRadius:10,
        width:Dimensions.get("screen").width-10,
        margin: 5,
    }
});