import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    View,
    FlatList,
    Modal, ActivityIndicator, StyleSheet, Dimensions
} from "react-native";
import ProductCard from "../Components/ProductCard";
import PubHeader from "../Components/PubHeader";
import {BasketContext} from "../Context/BasketContext";
import axios from "axios";
// @ts-ignore
import logo from "../assets/ez_logo.png";
import {COLORS} from "../AppAssets";


interface prodInt {
    id: number,
    title: string,
    description:string,
    price:number,
    size: number
}

const Pub = ({route, navigation}: any) => {
    const {id} = route.params;

    const [showLittleHeader, setShoeLittleHeader] = useState<boolean>(false);
    const {manufacturerId, setManufacturerId, basket} = useContext(BasketContext);
    const [visible, setVisible] = useState(false);
    const [load,setLoad] = useState(false)
    const [list,setList] = useState<Array<prodInt>>([])
    const arr: Array<prodInt> = [];
    const getProducts = async ()=> {
        await axios.get("http://192.168.1.74:8080/api/getProductByManufacturer/"+id.toString()).then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const data:prodInt = {
                    id: res.data[i].id,
                    title: res.data[i].name,
                    description: res.data[i].description,
                    price:res.data[i].brutto_price,
                    size: 500
                }
                arr.push(data);
                setList(arr);
                setLoad(true);
                console.log(list)
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts()
    },[])
    const hideDialog = () => setVisible(false);

    const addBasket = (prodName:string) => {
        if(id != manufacturerId ) {
            setVisible(true);
            basket.length = 0;
        }
        let product= list.find( prod => prod.title.valueOf() === prodName);
        setManufacturerId(id);
        if (basket.some(prod => prod.Name.valueOf() === prodName)) {
            basket.find(prod => prod.Name.valueOf() === prodName)!.Count += 1;
        }
        else {
            basket.push({
                // @ts-ignore
                product_id:product.prodid,
                // @ts-ignore
                Name:product.title,
                // @ts-ignore
                Price:product.price,
                Count:1
            });
        }

      console.log(basket)
    }
if (!load) {
    return(
    <View style={style.spinner}>
        <ActivityIndicator size="large" color={COLORS.orange}/>
    </View>)
}
else {
    return (
        <View>
            <FlatList
                data={list}
                renderItem={({item}) => <ProductCard
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    size={item.size}
                    key={item.id}
                    addBasket={addBasket}
                />}
                keyExtractor={item => item.id.toString()}
                extraData={list}
                ListHeaderComponent={<PubHeader id={id} navigation={navigation}/>}
            />
        </View>

    );
}
};

export default Pub;


const style = StyleSheet.create({
    spinner:{
        flex:1,
        justifyContent:"center"
    }
})