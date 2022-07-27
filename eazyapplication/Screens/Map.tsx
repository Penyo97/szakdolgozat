import React from 'react';
import {View} from "react-native";
import MapView from 'react-native-maps';




const Map = () => {
        const region = {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }

    return (
        <MapView
            region={region} style={{height:500}}/>
    );
};

export default Map;