import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Text, Alert} from "react-native";
import MapView, {Marker, Region} from 'react-native-maps';
import {BottonNavbar} from "../Components";
import {Icon} from "@rneui/base";
import {COLORS} from "../AppAssets";
import Animated from "react-native-reanimated";
import * as Location from 'expo-location';
//@ts-ignore
import logo from "../assets/ez_logo.png";

const TopNavbar = ({navigation}: any) => {
    return (
        <View style={style.topnavBar}>
            <View style={style.inputContainer}>
                <TextInput style={style.input} placeholder="Vendéglátóhelyek a környékeden."/>
            </View>
            <TouchableOpacity style={style.menu} onPress={() => navigation.openDrawer()}>
                <Icon name="bars" color="#fff" type="font-awesome-5" size={25}/>
            </TouchableOpacity>
        </View>
    )
}


const Map = ({navigation}: any) => {

    const [location, setLocation] = useState(null);
    const [zoomLevel, setZoomLevel] = useState<number>(0)


    const zoomLevelCalculator = (region: Region) => {
        setZoomLevel(Math.log2(360 * ((Dimensions.get("screen").width / 256) / region.longitudeDelta)) + 1);
    }

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            // @ts-ignore
            setLocation(location);
        })();
    }, []);

    const region = {
        // @ts-ignore
        latitude: location?.coords?.latitude,
        //@ts-ignore
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }


    return (
        <Animated.View>
            <TopNavbar navigation={navigation}/>
            <MapView
                onRegionChange={region => zoomLevelCalculator(region)}
                region={region} style={style.map}
            >
                {zoomLevel > 16 &&
                    (
                        <Marker

                            coordinate={{
                                latitude: 47.432035,
                                longitude: 18.911758,
                            }}
                            title={"proba"}
                            description={"proba"}
                        >
                            <View style={{backgroundColor: "red", padding: 10}}>
                                <Text>SF</Text>
                            </View>
                        </Marker>
                    )
                }
            </MapView>
            <BottonNavbar/>
        </Animated.View>
    );
};

export default Map;


let style = StyleSheet.create({
    map: {
        height: Dimensions.get("screen").height
    },
    topnavBar: {
        position: "absolute",
        top: Dimensions.get("screen").height / 10,
        zIndex: 100,
        flex: 1,
        alignSelf: "center",
        flexDirection: "row"
    },
    menu: {
        height: 55,
        width: 55,
        backgroundColor: COLORS.yellow,
        justifyContent: "center",
        borderRadius: 25,
        marginLeft: 10
    },
    inputContainer: {
        height: 55,
        backgroundColor: "#fff",
        width: Dimensions.get("screen").width / 1.5,
        borderRadius: 10
    },
    input: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10
    },
})