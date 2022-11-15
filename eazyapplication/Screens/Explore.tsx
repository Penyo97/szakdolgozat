import React, {useEffect, useState} from 'react';
import {LinearGradient} from "expo-linear-gradient"
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    Text,
    FlatList, ActivityIndicator
} from "react-native";
import {COLORS} from "../AppAssets";
// @ts-ignore
import logo from "../assets/ez_logo.png"
import {Icon} from "@rneui/base";
import ExploreBox from "../Components/ExploreBox";
import FilterModal from "../Components/FilterModal";
import axios from "axios";

interface manuInt{
    id: string
    description: string,
    rate: number,
    rateNumber:number,
    image: string,
    subImages: Array<string>,
    title: string
}
interface flatlistHeaderInterface {
    Headertext: string,
    Bottontext: string,
    DATA: Array<manuInt>
}


const FlatListHeader = ({Headertext, Bottontext,DATA}: flatlistHeaderInterface) => {
    return (
        <View style={{marginLeft: Dimensions.get("screen").width / 20, paddingTop: 15, paddingBottom: 15}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginRight: 20}}>
                <Text style={{fontSize: 18, color: "grey"}}>{Headertext}</Text>
                <Icon name="arrow-right" color={"grey"} type="font-awesome-5" size={25} style={{paddingRight: 5}}/>
            </View>
            <FlatList data={DATA}
                      renderItem={(item) =>
                          <ExploreBox
                              image={item.item.image}
                              title={item.item.title}
                              description={item.item.description}
                              subImages={item.item.subImages}
                              rate={item.item.rate}
                              rateNumber={item.item.rateNumber}
                              horizontal={true}
                              routeName={"PubScreen"}
                              id={item.item.id}
                          />
                      }
                      keyExtractor={item => item.id}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
            />
            <View style={{flexDirection: "row", justifyContent: "space-between", marginRight: 20}}>
                <Text style={{fontSize: 18, color: "grey"}}>{Bottontext}</Text>
                <Icon name="arrow-down" color={"grey"} type="font-awesome-5" size={25} style={{paddingRight: 5}}/>
            </View>
        </View>
    )
}
const Explore = ({navigation}: any) => {

    const [showFilterModal,setFilterModal] = useState<boolean>(false);
    const [load,setLoad] = useState(false)
    const [DATA,SETDATA] = useState<Array<manuInt>>([])
    const arr: Array<manuInt> = [];
    const getManufacturer = async ()=> {
        await axios.get("http://192.168.1.74:8080/api/getallmanufacturer").then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const data:manuInt = {
                    id: res.data[i].id,
                    title: res.data[i].name,
                    description: "Kocsma",
                    rate: 3214,
                    rateNumber:4.8,
                    image: logo,
                    subImages: [logo, logo, logo]
                }
                arr.push(data);
                SETDATA(arr);
                setLoad(true);
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getManufacturer()
    },[])


    if (!load) {
        return (
            <View style={style.spinner}>
                <ActivityIndicator size="large" color={COLORS.orange}/>
            </View>
        )
    }
    else {
        return (
            <View style={style.container}>
                <LinearGradient colors={[COLORS.red, COLORS.yellow]} style={style.header}>
                    <View style={style.header_menu}>
                        <Image source={logo} style={style.logo}/>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name="bars" color="#fff" type="font-awesome-5" size={40}/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.inputbox}>
                        <Icon name="search" color="#fff" type="font-awesome-5" size={25}
                              onPress={() => setFilterModal(true)}/>
                        <TextInput style={style.input} placeholder="Hely, termék vagy szolgáltatás keresése..."
                                   placeholderTextColor="#fff" selectionColor="#fff"/>
                    </View>
                    <View style={style.bottomTabs}>
                        <Text style={{color: "#fff"}}>Összes</Text>
                        <Text style={{color: "#fff"}}>Szórakozás</Text>
                        <Text style={{color: "#fff"}}>Gasztro</Text>
                        <Text style={{color: "#fff"}}>Események</Text>
                    </View>
                </LinearGradient>
                {showFilterModal &&
                <FilterModal isVisible={showFilterModal} onClose={() => setFilterModal(false)}/>
                }
                <FlatList data={DATA}
                          renderItem={(item) =>
                              <ExploreBox
                                  image={item.item.image}
                                  title={item.item.title}
                                  description={item.item.description}
                                  subImages={item.item.subImages}
                                  rate={item.item.rate}
                                  rateNumber={item.item.rateNumber}
                                  horizontal={false}
                                  routeName={"PubScreen"}
                                  id={item.item.id}
                              />
                          }
                          keyExtractor={item => item.id}
                          showsHorizontalScrollIndicator={false}
                          ListHeaderComponent={<FlatListHeader Headertext={"Klubok, Szórakozóhelyek"}
                                                               Bottontext={"Bárok, Kocsmák"}
                                                                DATA={DATA}/>}
                          contentContainerStyle={{paddingBottom: 100}}
                />
            </View>
        );
    }
};

export default Explore;

const style = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#F0F0F0"
    },
    header: {
        height: Dimensions.get("screen").height / 3.8,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        width: Dimensions.get("screen").width
    },
    logo: {
        width: 50,
        height: 50
    },
    header_menu: {
        paddingLeft: Dimensions.get("screen").width / 20,
        paddingRight: Dimensions.get("screen").width / 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30
    },
    inputbox: {
        marginLeft: Dimensions.get("screen").width / 20,
        marginRight: Dimensions.get("screen").width / 20,
        flexDirection: "row",
        borderColor: "#fff",
        borderWidth: 1,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    input: {
        paddingLeft: 10,
    },
    bottomTabs: {
        flexDirection: "row",
        flex: 1,
        paddingLeft: Dimensions.get("screen").width / 20,
        paddingRight: Dimensions.get("screen").width / 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    spinner:{
        flex:1,
        justifyContent:"center"
    }
})