import React from 'react';
import {View,StyleSheet,Dimensions} from "react-native";
import MapView from 'react-native-maps';
import {BottonNavbar} from "../Components";



const Map = () => {
        const region = {
                latitude: 47.497913,
                longitude: 19.040236,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }

    return (
        <View>
        <MapView
            region={region} style={style.map}/>
            <BottonNavbar/>
        </View>
    );
};

export default Map;


let style = StyleSheet.create({
    map:{
        height:Dimensions.get("screen").height
    }
})