import React, {createContext, useState} from "react";


interface BasketInterface {
    product_id: number,
    product_name: string,
    product_count: number,
    product_price: number,
}

interface basketContext {
    basket: Array<BasketInterface>,
    setBasket: (basket: BasketInterface) => void
    manufacturerId: number,
    setManufacturerId: (manufacturerID: number) => void
}

const basket: basketContext = {
    basket: [],
    setBasket: (basket: BasketInterface) => basket,
    manufacturerId: 0,
    setManufacturerId: (manufacturerID: number) => manufacturerID
}


const BasketContext = createContext<basketContext>(basket)


const BasketContextProvider = ({children}: any) => {
    const [basket, setBasket] = useState<Array<BasketInterface>>([]);
    const [manufacturerId, setManufacturerId] = useState<number>(0);

    const basketParam: basketContext = {
        basket,
        // @ts-ignore
        setBasket,
        manufacturerId,
        setManufacturerId

    }

    return (
        <BasketContext.Provider value={basketParam}>
            {children}
        </BasketContext.Provider>
    )
}

export {BasketContext, BasketContextProvider,BasketInterface}