import React, {useState} from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    FlatList
} from "react-native";
//@ts-ignore
import banner from "../assets/pub.jpg";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import logo from "../assets/ez_logo.png"
import {COLORS} from "../AppAssets";
import ProductCard from "../Components/ProductCard";


const list = [
    {
        id: '1',
        name: 'Üveges sör'
    },
    {
        id: '2',
        name: 'Csapolt sör'
    },
    {
        id: '3',
        name: 'Szeszesital'
    },
    {
        id: '4',
        name: 'Üditő'
    },
    {
        id: '5',
        name: 'Koktél'
    }
]

interface filterinterface {
    id: string,
    name: string,
    setActive: (active: string) => void,
    active: string
}

const FilterText = ({id, name, setActive, active}: filterinterface) => {

    return (
        <TouchableOpacity style={[style.filterText,id === active && style.filterborder]} onPress={() => setActive(id)}>
            <Text style={{color: "grey"}}>{name}</Text>
        </TouchableOpacity>
    )
}


const Pub = ({route, navigation}: any) => {

    const [active, setActive] = useState<string>("");


    const navigate = useNavigation();

    const {id} = route.params;
    return (
        <View>
            <ImageBackground source={banner} resizeMode="cover" style={style.banner} imageStyle={{
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25
            }}>
                <View style={style.bannerContainer}>
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <Icon name="arrow-left" color="#fff" type="font-awesome-5" size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" color="#fff" type="font-awesome-5" size={25}/>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
            <Image source={logo} style={style.image}/>
            <View style={style.pub_info}>
                <View style={style.info}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Icon name="bolt" color={COLORS.yellow} type="font-awesome-5" size={30}
                              style={{paddingRight: 5}}/>
                        <Text>4,7 (39)</Text>
                    </View>
                    <Icon name="info" color={COLORS.yellow} type="font-awesome-5" size={30} style={{paddingRight: 5}}/>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text>{id}</Text>
                    <Text style={{color: COLORS.yellow}}>Subtext</Text>
                </View>
            </View>
            <View style={style.inputContainer}>
                <Icon name="search" type="font-awesome-5" color={"grey"} size={24} style={{paddingRight: 5, paddingLeft: 10}}/>
                <TextInput style={style.input} placeholder="Vendéglátóhelyek a környékeden."/>
            </View>
            <FlatList data={list}
                      renderItem={({item}) =>
                          <FilterText id={item.id} name={item.name} setActive={setActive} active={active}/>
                      }
                      horizontal={true}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
            />
            <ProductCard/>
        </View>
    );
};

export default Pub;

const style = StyleSheet.create({
    banner: {
        height: Dimensions.get("screen").height / 3.6,
        backgroundColor: "white"
    },
    bannerContainer: {
        flexDirection: "row",
        width: Dimensions.get("screen").width,
        justifyContent: "space-between",
        padding: 30,
        paddingTop: 40
    },
    image: {
        width: 150,
        height: 150,
        zIndex: 10,
        position: "absolute",
        alignSelf: "center",
        top: "22%"
    },
    pub_info: {
        height: Dimensions.get("screen").height / 4.2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "white",
        zIndex: 5
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    inputContainer: {
        height: 55,
        width: Dimensions.get("screen").width - 20,
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    input: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10
    },
    filterText: {
        padding: 15,
        paddingTop: 8,
        paddingBottom:8,
        marginLeft:5
    },
    filterborder:{
        borderColor:COLORS.red,
        borderWidth:2,
        borderRadius:10
    }
});
