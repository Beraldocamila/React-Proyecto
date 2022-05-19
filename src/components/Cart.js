import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';
import {collection, setDoc, doc, serverTimestamp} from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import {ContainerCart, Button, Empty, ContainerImg, CartTitle, Total} from "./styledComponents";

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

        <ContainerCart>
            <div>
                {
                    cart.cartList.length > 0 && 
                        <Total>
                            <CartTitle>CUENTA FINAL</CartTitle>
                            <p>${cart.precioTotal()}</p>
                            <Button onClick={checkOut}>FINALIZAR COMPRA</Button>
                            <Link to='/'><Button>SEGUIR COMPRANDO</Button></Link>
                        </Total>
                }
            </div>

            <div>
                {
                    cart.cartList.length > 0 && 
                    <h1>Su carrito</h1>
                }
                {
                    cart.cartList.length > 0 && 
                            cart.cartList.map(item =>
                            <div>
                                <h3>Product: {item.titleItem}</h3>
                                <ContainerImg className="contextImg" src={item.pictureItem}></ContainerImg>
                                <p>Items:{item.amountItem}</p>
                                <p>Price: ${item.priceItem} each product.</p>
                                <p>Total Price for this product: ${cart.precioTotalItems(item.idItem)}</p>
                                <Button onClick={() => cart.removeItem(item.idItem)}>DELETE ITEM</Button>
                            </div>
                            )   
                }
                {
                    (cart.cartList.length > 0)
                    ? <Button onClick={cart.clear}>ELIMINAR PRODUCTOS</Button>
                    : <Empty>Su carrito esta vacio...</Empty>
                } 
            </div>
            
        </ContainerCart>    

        </>
    )
}

export default Cart;