import React, {createContext, useEffect, useState} from "react";
import * as Location from 'expo-location';


interface mapContext {
    location: number;
    setLocation: (loc: number) => void
}

const map: mapContext = {
    location:0,
    setLocation:(loc:number) => loc

}


const MapContext = createContext<mapContext>(map)


const MapContextProvider = ({children}: any) => {
    const [location, setLocation] = useState(0);
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

    const mapParam:mapContext = {
        location,
        setLocation

    }

    return(
        <MapContext.Provider value={mapParam}>
            {children}
        </MapContext.Provider>
    )
}

export {MapContext,MapContextProvider}