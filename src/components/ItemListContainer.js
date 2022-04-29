import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {fetchFirestore} from "./fetchFirestore";


const ItemListContainer = ({greeting}) => {

    const [desk, setDesk] = useState ([]);
    const {idCategory} = useParams();

    useEffect(() => {
        
        fetchFirestore(idCategory)
            .then(result => setDesk(result) )
            .catch (err => console.log(err))
    }, [idCategory])

    

    return(
        <>
        <p className="itemListContainer"> {greeting} </p>
        <ItemList productos={desk}/>

        </>
    )

}

export default ItemListContainer;