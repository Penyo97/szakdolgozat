import React, {useContext, useRef, useState} from 'react';
import {
    View,
    FlatList,
    Modal
} from "react-native";
import ProductCard from "../Components/ProductCard";
import PubHeader from "../Components/PubHeader";
import {BasketContext} from "../Context/BasketContext";

const list = [
    {
        prodid: '1',
        title: 'Üveges sör',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        prodid: '2',
        title: 'Csapolt sör',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        prodid: '3',
        title: 'Szeszesital',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        prodid: '4',
        title: 'Üditő',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    },
    {
        prodid: '5',
        title: 'Koktél',
        description: "asdasdasdísdsas",
        price: 800,
        size: 500
    }
]


const Pub = ({route, navigation}: any) => {
    const {id} = route.params;

    const [showLittleHeader, setShoeLittleHeader] = useState<boolean>(false);
    const {manufacturerId, setManufacturerId, basket} = useContext(BasketContext);
    const [visible, setVisible] = useState(false);

    const hideDialog = () => setVisible(false);

    const addBasket = (prodName:string) => {
        if(id != manufacturerId ) {
            setVisible(true);
            basket.length = 0;
        }
        let product= list.find( prod => prod.title.valueOf() === prodName);
        setManufacturerId(id);
        if (basket.some(prod => prod.product_name.valueOf() === prodName)) {
            basket.find(prod => prod.product_name.valueOf() === prodName)!.product_count += 1;
        }
        else {
            basket.push({
                // @ts-ignore
                product_id:product.prodid,
                // @ts-ignore
                product_name:product.title,
                // @ts-ignore
                product_price:product.price,
                product_count:1
            });
        }

      console.log(basket)
    }

    return (
        <View>
            <FlatList
                data={list}
                renderItem={({item}) => <ProductCard
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    size={item.size}
                    key={item.prodid}
                    addBasket={addBasket}
                />}
                keyExtractor={item => item.prodid}
                extraData={list}
                ListHeaderComponent={<PubHeader id={id} navigation={navigation}/>}
            />
        </View>
    );
};

export default Pub;


