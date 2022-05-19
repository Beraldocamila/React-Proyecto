import { useState } from "react";
import {IncrementDecrement, ItemCountButton, ContainerAddButton, Amount, Button} from "./styledComponents";

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

            <ContainerAddButton>
                <IncrementDecrement>
                    <Button onClick={decrement}>-</Button>
                    <Amount><p>Cantidad: {amount}</p></Amount>
                    <Button onClick={increment}>+</Button>
                </IncrementDecrement>
                <ItemCountButton>
                    {stock && amount
                    ?<Button onClick={() => onAdd(amount)}> ADD TO CART</Button>
                    : <Button variant="contained" disabled >ADD TO CART</Button>
                    }
                </ItemCountButton>
                
            </ContainerAddButton>
    )
}

export default ItemCount;