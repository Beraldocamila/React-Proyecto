import { useEffect, useState } from "react";
import {products} from "./products";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import customFetch from "./CustomFetch";


const ItemListContainer = ({greeting}) => {

    const [desk, setDesk] = useState ([]);
    const {idCategory} = useParams();

    useEffect(() => {
        if(idCategory ==  undefined){
            customFetch(2000, products)
            .then(result => setDesk(result))
            .catch(err => console.log(err))
        }else{
            customFetch(2000, products.filter(item => item.categoryId === parseInt(idCategory)))
            .then(result => setDesk(result))
            .catch(err => console.log(err))
        }

    }, [idCategory])


    return(
        <>
        <p className="itemListContainer"> {greeting} </p>
        <ItemList productos={desk}/>

        </>
    )

}

export default ItemListContainer;