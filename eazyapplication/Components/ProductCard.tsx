import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, Dimensions, Image, TouchableOpacity} from "react-native";
// @ts-ignore
import logo from "../assets/ez_logo.png"
import {COLORS} from "../AppAssets";
import {BasketContext} from "../Context/BasketContext";

interface pubcardInterface {
    title: string,
    description: string,
    price: number,
    size: number,
    addBasket: (title: string) => void
}

interface buttonInterface {
    price: number
}

interface titleButton {
    text: string,
    color: string,
    title: string
}

const Button = ({price}: buttonInterface) => {
    return (
        <View style={style.button}>
            <Text style={style.buttontext}>{price} Ft</Text>
        </View>
    );
}


const ProductCard = ({title, description, price, size, addBasket}: pubcardInterface) => {
    const [press, setPress] = useState(false);
    const [count, setCount] = useState(0);
    const {basket} = useContext(BasketContext);

    const modifyText = (text: string, title: string) => {
        if (text === "-") {
            if (basket.find(prod => prod.Name.valueOf() === title)!.Count > 0) {
                setCount(count - 1)
                basket.find(prod => prod.Name.valueOf() === title)!.Count -= 1;
                if (basket.find(prod => prod.Name.valueOf() === title)!.Count == 0) {
                    setPress(false)
                }
            } else {
                setPress(false)
            }

        } else {
            addBasket(title);
            setCount(count + 1)
        }
    }

    const CircleButtons = ({text, color, title}: titleButton) => {
        return (
            <TouchableOpacity style={[style.circleButton, {backgroundColor: color}]}
                              onPress={() => modifyText(text, title)}>
                <Text style={[{
                    fontSize: 20,
                    textAlign: "center"
                }, color === "transparent" ? {color: COLORS.red} : {color: "#fff"}]}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={[style.CardContainer, press && {backgroundColor: "rgba(131,232,186,0.37)"}]}
                          onPress={() => setPress(true)}>
            <View>
                <Image source={logo} style={style.image}/>
                {
                    press &&
                    <View style={style.countContainer}>
                        <CircleButtons text={"-"} color={"transparent"} title={title}/>
                        <Text>{count}</Text>
                        <CircleButtons text={"+"} color={COLORS.red} title={title}/>
                    </View>
                }
            </View>
            <View style={style.product_information}>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <View style={style.buttonBox}>
                    <Button price={price}/>
                    <Text style={style.size}>({size}ml)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default ProductCard;

const style = StyleSheet.create({
    CardContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: Dimensions.get("screen").width - 20,
        margin: 10,
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "space-around",
    },
    image: {
        height: 120,
        width: 120,
    },
    product_information: {
        alignSelf: "center",
    },
    button: {
        borderWidth: 1.5,
        borderColor: COLORS.yellow,
        borderRadius: 10,
        alignItems: "center",
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30
    },
    buttonBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    buttontext: {
        fontSize: 16,
        color: COLORS.yellow
    },
    size: {
        marginLeft: 10,
        color: COLORS.yellow,
        fontSize: 16
    },
    circleButton: {
        borderWidth: 1,
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        borderColor: COLORS.red,
    },
    countContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        alignItems: "center"
    }
});