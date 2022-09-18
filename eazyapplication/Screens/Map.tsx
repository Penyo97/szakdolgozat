import React, {useState, useContext} from 'react';
import {View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import MapView, {Marker, Region} from 'react-native-maps';
import {Icon, ImageProps} from "@rneui/base";
import {COLORS} from "../AppAssets";
import Animated from "react-native-reanimated";
//@ts-ignore
import logo from "../assets/ez_logo.png";
import {MapContext} from "../Context/MapContext";

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

    const [zoomLevel, setZoomLevel] = useState<number>(0)
    const {location} = useContext(MapContext);

    const zoomLevelCalculator = (region: Region) => {
        setZoomLevel(Math.log2(360 * ((Dimensions.get("screen").width / 256) / region.longitudeDelta)) + 1);
    }

    const region = {
        // @ts-ignore
        latitude: location?.coords?.latitude,
        //@ts-ignore
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    if (location == 0) {
        return (
            <View style={style.spinner}>
                <ActivityIndicator size="large" color={COLORS.orange}/>
            </View>
        )
    } else {
        return (
            <Animated.View>
                <TopNavbar navigation={navigation}/>
                <MapView
                    onRegionChange={region => zoomLevelCalculator(region)}
                    region={region} style={style.map}
                >
                    {zoomLevel > 15 &&
                        (
                            <Marker

                                coordinate={{
                                    latitude: 47.432035,
                                    longitude: 18.911758,
                                }}
                                title={"proba"}
                                description={"proba"}
                            >
                                <Image source={logo as unknown as ImageProps} style={style.image}/>
                            </Marker>
                        )
                    }
                </MapView>
            </Animated.View>
        );
    }
};

export default Map;


let style = StyleSheet.create({
    spinner:{
      flex:1,
      justifyContent:"center"
    },
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
    image: {
        height: 50,
        width: 50
    }
})