import React from 'react';
import {LinearGradient} from "expo-linear-gradient"
import {View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput,Text,FlatList} from "react-native";
import {COLORS} from "../AppAssets";
// @ts-ignore
import logo from "../assets/ez_logo.png"
import {Icon} from "@rneui/base";
import {BottonNavbar} from "../Components";


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Explore = ({navigation}:any) => {

    return (
        <View style={style.container}>
            <LinearGradient colors={[COLORS.red, COLORS.yellow]} style={style.header}>
                <View style={style.header_menu}>
                    <Image source={logo} style={style.logo}/>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" color="#fff" type="font-awesome-5" size={40}/>
                    </TouchableOpacity>
                </View>
                <View style={style.inputbox}>
                    <Icon name="search" color="#fff" type="font-awesome-5" size={25}/>
                    <TextInput style={style.input} placeholder="Hely, termék vagy szolgáltatás keresése..." placeholderTextColor="#fff"/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text>Összes</Text>
                    <Text>Szórakozás</Text>
                    <Text>Gasztro</Text>
                    <Text>Események</Text>
                </View>
            </LinearGradient>
            <FlatList data={DATA} renderItem={(item) => <Text>{item.item.title}</Text>} keyExtractor={item => item.id}/>
            <BottonNavbar/>
        </View>
    );
};

export default Explore;

const style = StyleSheet.create({
    container:{
        height:Dimensions.get("screen").height
    },
    header:{
        height:Dimensions.get("screen").height/4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width:Dimensions.get("screen").width
    },
    logo:{
        width:50,
        height:50
    },
    header_menu: {
        paddingLeft: Dimensions.get("window").width / 15,
        paddingRight: Dimensions.get("window").width / 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30
    },
    inputbox:{
        marginLeft: Dimensions.get("window").width / 15,
        marginRight: Dimensions.get("window").width / 15,
        flexDirection: "row",
        borderColor:"#fff",
        borderWidth:1,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10
    },
    input:{
        paddingLeft:10,
    }

})