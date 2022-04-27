import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState (0);
    const cart = useContext(CartContext);

    const onAdd = (amount) =>{
        alert("Usted a seleccionado: " + amount + " items");
        setItemCount(amount);
        cart.addItem(item, amount);
    }
return(
    <>
    {
        item && item.picture
        ?

    <div className="detail">
        <img className="contextImg" src={item.picture} />
        <div >
            <h1> {item.title}</h1>
            <p> {item.description}</p>
            <p> Precio: {item.price}</p>
            <p> Stock: {item.stock} unidades.</p>
            {

                itemCount === 0
                ? <ItemCount  stock={item.stock} initial= {itemCount} onAdd={onAdd}/>
                : <div> <Link to='/cart'> <button>CheckOut</button></Link>
                <Link to='/'><button>SEGUIR COMPRANDO</button></Link>
                </div>
            }

        </div>
    </div>
    : 
    <p>Cargando..</p>
    }
    </>
)
}

export default ItemDetail; 