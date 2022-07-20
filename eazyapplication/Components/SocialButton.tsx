import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { Icon } from "@rneui/themed";
import {color} from "@rneui/base";

interface buttonProps {
    buttonText:string,
    buttonColor:string,
    buttonWidth:string | number,
    buttonHeight: number,
    buttonIcon:string,
    iconColor:string,
    colorText:string
}


const SocialButton = ({buttonHeight,buttonColor,buttonWidth,buttonText,buttonIcon,iconColor,colorText}:buttonProps) => {

    let styles = StyleSheet.create({
        button:{
            width:buttonWidth,
            height:buttonHeight,
            backgroundColor:buttonColor,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:6,
            flexDirection:"row"
        },
        text:{
            color:colorText,
            fontSize: buttonHeight/2.2,
            paddingVertical:buttonHeight/5
        },
        icon:{
            paddingRight:8,
        }
    })




    return (
        <TouchableOpacity style={styles.button}>
            <Icon name={buttonIcon} brand={true} type="font-awesome-5" style={styles.icon} color={iconColor}/>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default SocialButton;