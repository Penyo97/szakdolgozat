import React, {useState} from 'react';
import {
    View,
    FlatList,
    Animated
} from "react-native";
import ProductCard from "../Components/ProductCard";
import PubHeader from "../Components/PubHeader";


const list = [
    {
        id: '1',
        title: 'Üveges sör',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        id: '2',
        title: 'Csapolt sör',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        id: '3',
        title: 'Szeszesital',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        id: '4',
        title: 'Üditő',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        id: '5',
        title: 'Koktél',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    }
]


const Pub = ({route, navigation}: any) => {
    const {id} = route.params;

    const [showLittleHeader,setShoeLittleHeader] =useState<boolean>(false);
    return (
        <View>
            <FlatList
                data={list}
                renderItem={({item}) => <ProductCard
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    size={item.size}
                />}
                keyExtractor={item => item.id}
                ListHeaderComponent={<PubHeader id={id} navigation={navigation}/>}
            />
        </View>
    );
};

export default Pub;


