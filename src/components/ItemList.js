
import Item from './Item';
import {ItemsContainer} from './styledComponents';


export default function ItemList({productos}){
    return(
        <>
            <ItemsContainer>
                {productos.map((products) =>
                    <Item key={products.id}{...products} />
                )}
            </ItemsContainer>
        </>

    )
}