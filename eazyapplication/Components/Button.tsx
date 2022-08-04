import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

interface buttonProps {
    buttonText:string,
    buttonColor:string,
    buttonWidth:string | number,
    buttonHeight: number,
    routeName? : string
}

type paramType = keyof RootStackParamList

const Button = ({buttonText,buttonColor,buttonWidth,buttonHeight,routeName}:buttonProps) => {
    const route = routeName as paramType;
    type Props = StackNavigationProp<RootStackParamList,typeof route>
    const navigation = useNavigation<Props>();

    let styles = StyleSheet.create({
        button:{
            width:buttonWidth,
            height:buttonHeight,
            backgroundColor:buttonColor,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:6
        },
        text:{
            color:"#fff",
            fontSize: buttonHeight/2.2,
            paddingVertical:buttonHeight/5
        }
    })

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(route) }>
                <Text style={styles.text}>{buttonText.toUpperCase()}</Text>
        </TouchableOpacity>
    );

};


export default Button;