import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text, TouchableOpacity} from "react-native";
import {Icon, ImageProps} from "@rneui/base";
import {COLORS} from "../AppAssets";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../App";
import {useNavigation} from "@react-navigation/native";


interface ExploreBoxInterface {
    image: string,
    title: string,
    description: string,
    subImages: Array<string>,
    rate: number,
    rateNumber: number,
    horizontal: boolean,
    routeName?: string,
    id: string
}

interface ExploreBoxButtonInterface {
    routeName?: string,
    id: string
}


type paramType = keyof RootStackParamList

const ExploreButton = ({routeName,id}:ExploreBoxButtonInterface) => {

    const route = routeName as paramType;
    type Props = StackNavigationProp<RootStackParamList,typeof route>
    const navigation = useNavigation<Props>();


    return (
        <TouchableOpacity style={style.button} onPress={() => {
            // @ts-ignore
            navigation.navigate(route, {id: id})
        }}>
            <Text style={{color: "#fff"}}> MEGNÉZEM</Text>
        </TouchableOpacity>
    )
}

const ExploreBox = ({rate, rateNumber, subImages, image, title, description, horizontal, routeName,id}: ExploreBoxInterface) => {
    return (
        <View
            style={[style.container, horizontal && {
                marginRight: Dimensions.get("screen").width / 30,
                marginLeft: 0,
                width: (Dimensions.get("screen").width / 100 ) * 92
            }]}>
            <View style={style.imageTitleBox}>
                <Image source={image as unknown as ImageProps} style={style.image}/>
                <View>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.description}>{description}</Text>
                    <View style={style.imagesBox}>
                        {subImages.map((imgName) => {
                            return <Image key={Math.random()} source={imgName as unknown as ImageProps}
                                          style={style.smallImage}/>
                        })}
                    </View>
                </View>
            </View>
            <View style={style.RateButtonBox}>
                <View style={{flexDirection: "row"}}>
                    <Icon name="bolt" color={COLORS.yellow} type="font-awesome-5" size={25} style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 18}}>{rate} ({rateNumber})</Text>
                </View>
                <ExploreButton routeName={routeName} id={id}/>
            </View>
        </View>
    );
};

export default ExploreBox;


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: Dimensions.get("screen").width / 30,
        marginRight: Dimensions.get("screen").width / 30,
        height: Dimensions.get("screen").height / 3.4,
        borderRadius: 20,
        padding: 15,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10
    },
    imageTitleBox: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    RateButtonBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10
    },
    image: {
        height: 110,
        width: 110
    },
    imagesBox: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    smallImage: {
        height: 50,
        width: 50
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        paddingBottom: 15,
        textAlign: "center",
        paddingTop: 10
    },
    description: {
        fontSize: 14,
        color: COLORS.yellow,
        paddingBottom: 10,
        paddingLeft: 15
    },
    button: {
        backgroundColor: COLORS.red,
        flex: 1,
        marginLeft: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 10
    }
});