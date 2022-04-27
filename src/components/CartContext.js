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

    const precioTotalItems = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].amountItem;
    }

    const precioSubtotal = () => {
        let totalItems = cartList.map(item => precioTotalItems(item.idItem));
        return totalItems.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const precioTotal = () => {
        return precioSubtotal();
    }
    const totalAmountItems = () =>{
        let amounts = cartList.map(item => item.amountItem);
        return amounts.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, precioTotalItems, precioTotal, precioSubtotal, totalAmountItems}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;