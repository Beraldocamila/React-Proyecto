import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getProducts } from "./products";
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [desk, setDesk] = useState ([]);

    useEffect(() => {
        async function pedirProductos() {
            let datosProductos = await getProducts();
            setDesk(datosProductos)
        }
        pedirProductos();
    }, [])


    return(
        <>
        <p className="itemListContainer"> {greeting} </p>
        <ItemList productos={desk}/>
        <ItemCount   stock={6} initial= {1}/>
        </>
    )

}

export default ItemListContainer;