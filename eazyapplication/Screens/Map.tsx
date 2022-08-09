import React from 'react';
import {View, StyleSheet, TextInput, Dimensions,TouchableOpacity} from "react-native";
import MapView,{Marker} from 'react-native-maps';
import {BottonNavbar} from "../Components";
import {Icon} from "@rneui/base";
import {COLORS} from "../AppAssets";
import Animated from "react-native-reanimated";

const TopNavbar = ({navigation}:any) => {
    return(
        <View style={style.topnavBar}>
            <View style={style.inputContainer}>
                <TextInput style={style.input} placeholder="Vendéglátóhelyek a környékeden." />
            </View>
            <TouchableOpacity style={style.menu} onPress={()=> navigation.openDrawer()}>
                <Icon name="bars" color="#fff" type="font-awesome-5" size={25}/>
            </TouchableOpacity>
        </View>
    )
}



const Map = ({navigation}:any) => {


        const region = {
                latitude: 47.497913,
                longitude: 19.040236,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }




    return (
        <Animated.View>
            <TopNavbar  navigation={navigation}/>
        <MapView
            region={region} style={style.map}>
            <Marker
                coordinate={region}
                title={"proba"}
                description={"proba"}
            />
        </MapView>
            <BottonNavbar/>
        </Animated.View>
    );
};

export default Map;


let style = StyleSheet.create({
    map:{
        height:Dimensions.get("screen").height
    },
    topnavBar:{
        position:"absolute",
        top:Dimensions.get("screen").height / 10,
        zIndex:100,
        flex:1,
        alignSelf:"center",
        flexDirection:"row"
    },
    menu:{
        height:55,
        width:55,
        backgroundColor: COLORS.yellow,
        justifyContent:"center",
        borderRadius:25,
        marginLeft:10
    },
    inputContainer: {
        height: 55,
        backgroundColor: "#fff",
        width: Dimensions.get("screen").width / 1.5,
        borderRadius: 10
    },
    input:{
        flex:1,
        justifyContent:"center",
        paddingLeft:10
    },
    })