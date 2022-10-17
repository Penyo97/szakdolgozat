import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput, ScrollView} from "react-native";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../AppAssets";
// @ts-ignore
import logo from "../assets/ez_logo.png";
import {BasketContext, BasketInterface} from "../Context/BasketContext";


interface circle {
    index: string,
    setIndex: (index: string) => void,
    price: number,
    tipPercent: number,
    setTipPercent: (percent: number) => void
}


const TipCircle = ({index, setIndex, price, tipPercent, setTipPercent}: circle) => {
    return (
        <View>
            <View style={circleStyle.topCircle}>
                <TouchableOpacity style={"2" === index ? circleStyle.activeCircle : circleStyle.circle} onPress={() => {
                    setIndex("2");
                    setTipPercent(10)
                }}>
                    <Text style={[circleStyle.font, "2" === index && {color: "white"}]}>10%</Text>
                </TouchableOpacity>
            </View>
            <View style={circleStyle.middleCircles}>
                <TouchableOpacity style={"1" === index ? circleStyle.activeCircle : circleStyle.circle} onPress={() => {
                    setIndex("1");
                    setTipPercent(0)
                }}>
                    <Text style={[circleStyle.font, "1" === index && {color: "white"}]}>0%</Text>
                </TouchableOpacity>
                <View>
                    <Text style={[circleStyle.font, {
                        alignSelf: "center",
                        color: "#5EFC8D"
                    }]}>{(price / 100) * tipPercent} Ft</Text>
                    <Text style={{fontSize: 18, color: "gray"}}>Borravaló</Text>
                </View>
                <TouchableOpacity style={"3" === index ? circleStyle.activeCircle : circleStyle.circle} onPress={() => {
                    setIndex("3");
                    setTipPercent(15)
                }}>
                    <Text style={[circleStyle.font, "3" === index && {color: "white"}]}>15%</Text>
                </TouchableOpacity>
            </View>
            <View style={circleStyle.bottomCircle}>
                <TouchableOpacity style={"4" === index ? circleStyle.activeCircle : circleStyle.circle} onPress={() => {
                    setIndex("4");
                    setTipPercent(20)
                }}>
                    <Text style={[circleStyle.font, "4" === index && {color: "white"}]}>20%</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const circleStyle = StyleSheet.create({
    topCircle: {
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    circle: {
        height: 75,
        width: 75,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    activeCircle: {
        backgroundColor: "#5EFC8D",
        height: 75,
        width: 75,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    middleCircles: {
        paddingTop: 42,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    bottomCircle: {
        paddingTop: 42,
        flexDirection: "row",
        justifyContent: "center"
    },
    font: {
        fontSize: 26
    }
});


const OrderButton = () => {
    return (
        <TouchableOpacity style={style.orderbutton}>
        <Text style={{fontSize:16,color:"#fff"}}>Megrendelés</Text>
    </TouchableOpacity>
    )
}

const wholePrice = (basket: Array<BasketInterface>): number => {
    let sum = 0;
    basket.forEach(prod => sum += (prod.product_price * prod.product_count));
    return sum;
}

const Tip = () => {

    const navigate = useNavigation();
    const [index, setIndex] = useState<string>("1");
    const [tipPercent, setTipPercent] = useState<number>(0)
    const {basket} = useContext(BasketContext);
    return (
        <ScrollView style={{backgroundColor: COLORS.red}}>
            <View style={style.container}>
                <View style={style.top}>
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <Icon name="arrow-left" color="black" type="font-awesome-5" size={25}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18}}>Borravaló a személyzetnek</Text>
                </View>
                <View style={style.shop}>
                    <Image source={logo} style={style.image}/>
                    <View>
                        <Text style={{fontSize: 24, paddingBottom: 20}}>Instant</Text>
                        <View style={{flexDirection: "row"}}>
                            <Icon name="bolt" color={COLORS.yellow} type="font-awesome-5" size={25}
                                  style={{paddingRight: 5}}/>
                            <Text style={{fontSize: 18}}>4,7 (39)</Text>
                        </View>
                    </View>
                </View>
                <TipCircle index={index} setIndex={setIndex} price={wholePrice(basket)} tipPercent={tipPercent}
                           setTipPercent={setTipPercent}/>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <View>
                        <Text style={{fontSize: 20}}>Válasz a százalékok közül.</Text>
                        <Text style={{paddingTop: 10, fontSize: 16, alignSelf: "center", paddingBottom: 10}}>vagy</Text>
                    </View>
                </View>
                <View style={[style.customtip,{paddingBottom:15}]}>
                    <View>
                        <Text style={{fontSize: 18}}>Add meg a itt Te</Text>
                        <Text style={{fontSize: 18}}>a pontos összeget:</Text>
                    </View>
                    <TextInput placeholder={"0 Ft"} style={style.custominput}/>
                </View>
                <View style={{paddingTop: 20, backgroundColor: "#fff"}}>
                    <View style={style.sum}>
                        <Text style={{fontSize: 18, color: "grey"}}>Borravaló összege</Text>
                        <Text style={{fontSize: 18, color: "#5EFC8D"}}>{(wholePrice(basket) / 100) * tipPercent} Ft
                            ({tipPercent}%)</Text>
                    </View>
                    <View style={style.sum}>
                        <Text style={{fontSize: 18, color: "grey"}}>Fogyasztás összege </Text>
                        <Text style={{fontSize: 18, color: "#5EFC8D"}}>{wholePrice(basket)} Ft </Text>
                    </View>
                    <View style={[style.sum,{paddingBottom:15}]}>
                        <Text style={{fontSize: 18, color: "grey"}}>A teljes összeg</Text>
                        <Text style={{
                            fontSize: 18,
                            color: "#5EFC8D"
                        }}>{((wholePrice(basket) / 100) * tipPercent) + wholePrice(basket)} Ft </Text>
                    </View>
                    <OrderButton/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Tip;

const style = StyleSheet.create({
    container: {
        height: "100%",
        width: Dimensions.get("screen").width,
        backgroundColor: "#efeeee",
        marginTop: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    top: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "white"
    },
    shop: {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 10
    },
    image: {
        height: 120,
        width: 120
    },
    customtip: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    custominput: {
        borderWidth: 1,
        height: 45,
        width: 100,
        borderColor: "grey",
        borderRadius: 5,
        textAlign: "center"
    },
    sum: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10
    },
    orderbutton:{
        backgroundColor: COLORS.red,
        paddingTop:15,
        paddingBottom:15,
        width:Dimensions.get("screen").width/1-40,
        margin:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    }
});