import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface buttonProps {
    buttonText:string,
    buttonColor:string,
    buttonWidth:string | number,
    buttonHeight: number
}

const Button = ({buttonText,buttonColor,buttonWidth,buttonHeight}:buttonProps) => {

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
        <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{buttonText.toUpperCase()}</Text>
        </TouchableOpacity>
    );

};


export default Button;