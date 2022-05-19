import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext';
import {ContainerDetail, ContainerImg, DetailDescription, TitleId, ItemCountButton, Button, Buttons} from "./styledComponents";

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

    <ContainerDetail>
        <ContainerImg src={item.picture} />
        <DetailDescription >
            <TitleId > {item.title}</TitleId>
            <p> {item.description}</p>
            <p> Precio: ${(new Intl.NumberFormat('en-IN', { style: 'decimal' }).format(item.price))}</p>
            <p> Stock: {item.stock} unidades.</p>
            
        </DetailDescription>
        <ItemCountButton>
            {

                itemCount === 0
                ? <ItemCount  stock={item.stock} initial= {itemCount} onAdd={onAdd}/>
                : <Buttons> 
                    <Link to='/cart'> <Button>CheckOut</Button></Link>
                    <Link to='/'><Button>Keep on buying</Button></Link>
                </Buttons>
            }
        </ItemCountButton>


    </ContainerDetail>
    : 
    <p>Cargando..</p>
    }
    </>
)
}

export default ItemDetail; 