
import Item from './Item'

export default function ItemList({productos}){
    return(
        <>
            <div>
                {productos.map((products) =>
                    <Item key={products.id}{...products} />
                )}
            </div>
        </>

    )
}