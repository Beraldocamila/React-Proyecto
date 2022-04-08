import { useState } from "react";
import escritorio from "../images/escritorio.png"

const ItemCount = ({stock, initial}) => {

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
    
    const onAdd = () =>{
        alert("Usted a seleccionado: " + amount + " items");
    }
    
    return (
        <div className="addToCart">
            <div className="desk_title">
                <h3 className="title">Escritorio</h3>
                <img src={escritorio} alt="escritorio"/>
            </div>
            <div className="addToCart_button">
                <button onClick={decrement}>-</button>
                <p>Cantidad: {amount}</p>
                <button onClick={increment}>+</button>
                <button onClick={onAdd}> ADD TO CART</button>
            </div>
        </div>
    )
}

export default ItemCount;