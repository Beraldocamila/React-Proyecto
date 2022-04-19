
import Item from './Item'


export default function ItemList({productos}){
    return(
        <>

            <div className='itemsContainer'>
                {productos.map((products) =>
                    <Item key={products.id}{...products} />
                )}
            </div>

        </>

    )
}