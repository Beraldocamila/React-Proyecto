import { createContext, useState } from "react";
import { products } from "./products";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, amount) =>{


    let sameItem = cartList.find (products => products.idItem === item.id);
    if (sameItem === undefined){
        setCartList([
            ...cartList,
            {
                idItem: item.id,
                pictureItem: item.picture[0],
                titleItem: item.title,
                priceItem: item.price,
                amountItem: amount
            }
        ]);
    }else {
        sameItem.amountItem += amount;
        }
    }

    const clear = ()=>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        let itemsLeft = cartList.filter(item => item.idItem != id)
        setCartList(itemsLeft);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;