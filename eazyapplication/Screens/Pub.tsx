import React from 'react';
import {View,Text,SafeAreaView} from "react-native";

const Pub = ({route}:any) => {

    const {id} = route.params;
    return (
        <SafeAreaView>
        <Text>sdgsd{id}</Text>
        </SafeAreaView>
    );
};

export default Pub;

