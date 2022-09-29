import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from "react-native";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../AppAssets";
// @ts-ignore
import logo from "../assets/ez_logo.png";





const Tip = () => {

    const navigate = useNavigation();

    return (
        <View style={{backgroundColor: COLORS.red}}>
            <View style={style.container}>
                <View style={style.top}>
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <Icon name="arrow-left" color="black" type="font-awesome-5" size={25}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18}}>Borravaló a személyzetnek</Text>
                </View>
                <View style={style.shop}>
                    <Image source={logo} style={style.image}/>
                    <View>
                        <Text style={{fontSize: 24, paddingBottom: 20}}>Instant</Text>
                        <View style={{flexDirection: "row"}}>
                            <Icon name="bolt" color={COLORS.yellow} type="font-awesome-5" size={25}
                                  style={{paddingRight: 5}}/>
                            <Text style={{fontSize: 18}}>4,7 (39)</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Tip;

const style = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        backgroundColor: "#efeeee",
        marginTop: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    top: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "white"
    },
    shop: {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 10
    },
    image: {
        height: 120,
        width: 120
    }
});