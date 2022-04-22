import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const cart = useContext(CartContext);
    return(
        <>
            <h1>Su carrito contiene:</h1>
            {
                cart.cartList.length > 0 && 
                    
                        cart.cartList.map(item =>
                        
                        <div>
                            <img className="contextImg" src={item.pictureItem}></img>
                            <h3>Product: {item.titleItem}</h3>
                            <p>Items:{item.amountItem}</p>
                            <p>Price: {item.priceItem} each product.</p>
                            <button onClick={() => cart.removeItem(item.idItem)}>DELETE ITEM</button>
                        </div>
                        )
                    
                    
            }

            <button onClick={cart.clear}>ELIMINAR PRODUCTOS</button>
        </>
    )
}

export default Cart;