import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {fetchFirestore} from "./fetchFirestore";
import { Intro } from "./styledComponents";


const ItemListContainer = ({intro}) => {

    const [desk, setDesk] = useState ([]);
    const {idCategory} = useParams();

    useEffect(() => {
        
        fetchFirestore(idCategory)
            .then(result => setDesk(result) )
            .catch (err => console.log(err))
    }, [idCategory])

    

    return(
        <>
        <Intro>{intro}</Intro>
        <ItemList productos={desk}/>

        </>
    )

}

export default ItemListContainer;