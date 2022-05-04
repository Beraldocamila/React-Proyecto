import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';
import {collection, setDoc, doc, serverTimestamp} from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const Cart = () => {
    const cart = useContext(CartContext);

    const checkOut = () =>{
        let buy = {
            buyer:{
                name: "Camila",
                email: "camilasb@hotmail.com",
                phone: "123456789"
            },
            items: cart.cartList.map(item => ({
                id: item.idItem,
                title: item.titleItem,
                price: item.priceItem,
                amount: item.amountItem
            })),
            dat:serverTimestamp(),
            total: cart.precioTotal()
        }

        const createOrderFirestore = async () => {
            const newBuy = doc(collection(db, "orders"));
            await setDoc(newBuy, buy);
            return newBuy;
        }

        createOrderFirestore()
            .then(result => alert('Acabas de realizar una compra. Este es tu ID: ' + result.id))
            .catch(err => console.log(err));
    }
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
                        <button onClick={checkOut}>FINALIZAR COMPRA</button>
                        
                    </div>
                
            }

            <Link to='/'><button>SEGUIR COMPRANDO</button></Link>

            


            
        </>
    )
}

export default Cart;