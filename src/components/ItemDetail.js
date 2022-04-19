import { useState } from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState (0);

    const onAdd = (amount) =>{
        alert("Usted a seleccionado: " + amount + " items");
        setItemCount(amount);
    }
return(
    <>
    {
        item && item.picture
        ?

    <div className="detail">
        <img src={item.picture} />
        <div >
            <h1> {item.title}</h1>
            <p> {item.description}</p>
            <p> Precio: {item.price}</p>
            <p> Stock: {item.stock} unidades.</p>
            {

                itemCount === 0
                ? <ItemCount  stock={item.stock} initial= {itemCount} onAdd={onAdd}/>
                : <Link to='/cart'> <button>CheckOut</button></Link>
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