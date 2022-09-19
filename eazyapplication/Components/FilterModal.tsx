import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback, Modal, Dimensions} from "react-native";


interface modalinterface {
    isVisible: boolean,
    onClose: () => void
}


const FilterModal = ({isVisible, onClose}: modalinterface) => {


    const  modalAnimatedValue = useRef(new Animated.Value(0)).current


    const [showFilterModal,setShowFilterModal] = useState<boolean>(isVisible);

    useEffect(() =>{
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start();

        }
        else{
            Animated.timing(modalAnimatedValue, {
                toValue:0,
                duration:500,
                useNativeDriver:false
            }).start(() => onClose());
        }
    },[showFilterModal])

    const modalY  = modalAnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[700,200]
    })

    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={{
                flex:1,
                backgroundColor:"rgba(91,87,87,0.45)"
            }}>
                <TouchableWithoutFeedback
                onPress={() => setShowFilterModal(false)}>
                    <View style={{
                        position:'absolute',
                        top:0,
                        bottom:0,
                        left:0,
                        right:0
                    }}/>
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position:'absolute',
                        width:"100%",
                        height:"100%",
                        left:0,
                        top: modalY,
                        borderTopRightRadius:25,
                        borderTopLeftRadius:25,
                        backgroundColor:"#fff",
                        zIndex:100,
                        padding:20
                    }}
                >
                <View>

                </View>
                </Animated.View>
            </View>
        </Modal>
    );
};


export default FilterModal;