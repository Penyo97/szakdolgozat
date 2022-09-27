import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../AppAssets";
// @ts-ignore
import logo from "../assets/ez_logo.png";
import {Button, Icon} from "@rneui/base";
import {BasketContext} from "../Context/BasketContext";
import { DataTable } from 'react-native-paper';

interface whiteButtonInterface {
    id: string,
    text: string
    select: string,
    setSelect: (select: string) => void
}

const WhiteButton = ({id, text, select, setSelect}: whiteButtonInterface) => {
    return (
        <TouchableOpacity style={[style.transparent, id === select && style.white]} onPress={() => setSelect(id)}>
            <Text style={id === select ? {color: "grey"} : {color: "#fff"}}>{text}</Text>
        </TouchableOpacity>
    )
}


const Basket = () => {
    const {basket} = useContext(BasketContext);

    return (
        <View style={style.basket}>
            {basket.length == 0 ? (
                <View style={style.emptyBasket}>
                    <Text style={{fontSize:18,color:COLORS.red}}>Nincs Termék a kosárban</Text>
                </View>
            ) : (
                    <DataTable >
                        <DataTable.Header>
                            <DataTable.Title>Termék neve</DataTable.Title>
                            <DataTable.Title numeric>Termék ára</DataTable.Title>
                            <DataTable.Title numeric>Termék db</DataTable.Title>
                            <DataTable.Title numeric>Összesen</DataTable.Title>
                        </DataTable.Header>
                    {basket.filter(x => x.product_count != 0).map(({product_name,product_price,product_count}) => {
                        return(
                                <DataTable.Row key={product_name}>
                                    <DataTable.Cell >{product_name}</DataTable.Cell>
                                    <DataTable.Cell numeric>{product_price} Ft</DataTable.Cell>
                                    <DataTable.Cell numeric>{product_count} db</DataTable.Cell>
                                    <DataTable.Cell numeric>{product_count*product_price} Ft</DataTable.Cell>
                                </DataTable.Row>
                        )
                    })}
                        <View style={{paddingTop:20,paddingBottom:20}}/>
                        <Button color={"warning"} radius={25} title={"Tovább a rendeléshez"}/>
                    </DataTable>
            )}
        </View>
    )
}


const Tray = ({navigation}: any) => {
    const [select, setSelect] = useState<string>("2")
    const {basket} = useContext(BasketContext);

    return (
        <View>
            <LinearGradient colors={[COLORS.red, COLORS.yellow]} style={style.header}>
                <View style={style.header_menu}>
                    <Image source={logo} style={style.logo}/>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" color="#fff" type="font-awesome-5" size={40}/>
                    </TouchableOpacity>
                </View>
                <View style={style.bottomTabs}>
                    <WhiteButton id={"1"} text={"Közös tálca"} select={select} setSelect={setSelect}/>
                    <WhiteButton id={"2"} text={"Egyéni Tálca"} select={select} setSelect={setSelect}/>
                </View>
            </LinearGradient>
            { Basket()}
        </View>
    );
};


export default Tray;


const style = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#F0F0F0"
    },
    header: {
        height: Dimensions.get("screen").height / 5,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        width: Dimensions.get("screen").width
    },
    logo: {
        width: 50,
        height: 50
    },
    header_menu: {
        paddingLeft: Dimensions.get("screen").width / 20,
        paddingRight: Dimensions.get("screen").width / 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30
    },
    bottomTabs: {
        flexDirection: "row",
        flex: 1,
        paddingLeft: Dimensions.get("screen").width / 20,
        paddingRight: Dimensions.get("screen").width / 20,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    transparent: {
        borderColor: "#fff",
        borderWidth: 1,
        height: 35,
        borderRadius: 6,
        width: Dimensions.get("screen").width / 3.5,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    white: {
        backgroundColor: "#fff",
    },
    basket: {
        backgroundColor: "#fff",
        height: Dimensions.get("screen").height / 2,
        borderRadius: 25,
        marginTop: 20,
        margin: 10
    },
    emptyBasket:{
        padding:20
    },
    map:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})