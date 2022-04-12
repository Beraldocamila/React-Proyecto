
import { useEffect, useState} from "react";
import customFetch from "./CustomFetch";
import ItemDetail from "./ItemDetail";
import {products} from "./products";


const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products[2])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );



}

export default ItemDetailContainer;