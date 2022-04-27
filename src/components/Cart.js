import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext);

    return(
        <>
            <h1>Su carrito</h1>

            {
                (cart.cartList.length > 0)
                ? <button onClick={cart.clear}>ELIMINAR PRODUCTOS</button>
                : <h3>Esta vacio...</h3>
            }
            {
                cart.cartList.length > 0 && 
                    
                        cart.cartList.map(item =>
                        
                        <div>
                            <img className="contextImg" src={item.pictureItem}></img>
                            <h3>Product: {item.titleItem}</h3>
                            <p>Items:{item.amountItem}</p>
                            <p>Price: ${item.priceItem} each product.</p>
                            <p>Total Price for this product: ${cart.precioTotalItems(item.idItem)}</p>
                            <button onClick={() => cart.removeItem(item.idItem)}>DELETE ITEM</button>
                        </div>
                        )
                    
                    
            }
            {
                cart.cartList.length > 0 && 
                    
                    <div>
                        <h3>CUENTA FINAL</h3>
                        <p>${cart.precioTotal()}</p>
                        <button>FINALIZAR COMPRA</button>
                        
                    </div>
                
            }

            <Link to='/'><button>SEGUIR COMPRANDO</button></Link>

            


            
        </>
    )
}

export default Cart;