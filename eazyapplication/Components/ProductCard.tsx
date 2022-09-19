import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image,TouchableOpacity} from "react-native";
// @ts-ignore
import logo from "../assets/ez_logo.png"
import {COLORS} from "../AppAssets";


interface pubcardInterface {
    title:string,
    description:string,
    price: number,
    size:number,
}

interface buttonInterface {
    price:number
}
const Button = ({price}:buttonInterface) =>{
    return(
        <TouchableOpacity style={style.button}>
        <Text style={style.buttontext}>{price} Ft</Text>
        </TouchableOpacity>
    );
}

const ProductCard = ({title,description,price,size}:pubcardInterface) => {
    return (
        <View style={style.CardContainer}>
            <Image source={logo} style={style.image}/>
         <View style={style.product_information}>
             <Text>{title}</Text>
             <Text>{description}</Text>
             <View style={style.buttonBox}>
                 <Button price={price}/>
                 <Text style={style.size}>({size}ml)</Text>
             </View>
         </View>
        </View>
    );
};


export default ProductCard;

const style = StyleSheet.create({
    CardContainer:{
        backgroundColor:"#fff",
        borderRadius:10,
        width:Dimensions.get("screen").width-20,
        margin: 10,
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10,
        justifyContent:"space-around",
    },
    image:{
        height:120,
        width:120,
    },
    product_information:{
        alignSelf:"center",
    },
    button:{
        borderWidth:1.5,
        borderColor:COLORS.yellow,
        borderRadius:10,
        alignItems:"center",
        padding:10,
        paddingRight:30,
        paddingLeft:30
    },
    buttonBox:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20
    },
    buttontext:{
        fontSize:16,
        color:COLORS.yellow
    },
    size:{
        marginLeft:10,
        color:COLORS.yellow,
        fontSize:16
    }
});