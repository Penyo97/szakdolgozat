import React from 'react';
import {LinearGradient} from "expo-linear-gradient"
import {View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput} from "react-native";
import {COLORS} from "../AppAssets";
// @ts-ignore
import logo from "../assets/ez_logo.png"
import {Icon} from "@rneui/base";
import {BottonNavbar} from "../Components";

const Explore = ({navigation}:any) => {

    return (
        <View>
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
            </LinearGradient>

        </View>
    );
};

export default Explore;

const style = StyleSheet.create({
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