import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [amount, setAmount] = useState(initial);
    
    const increment = () =>{
        if (amount < stock){
            setAmount(amount+1);
        }   
    }
    
    const decrement = () =>{
        if(amount > 0){
            setAmount(amount-1);
        }
    }
    

    
    return (
        <div className="addToCart">

            <div className="addToCart_button">
                <button onClick={decrement}>-</button>
                <p>Cantidad: {amount}</p>
                <button onClick={increment}>+</button>
                <button onClick={() => onAdd(amount)}> ADD TO CART</button>
            </div>
        </div>
    )
}

export default ItemCount;