import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

return(
    <>
    {
        item.picture
        ?

    <div className="detail">
        <img src={item.picture} />
        <div >
            <h1> {item.title}</h1>
            <p> {item.description}</p>
            <p> Precio: {item.price}</p>
            <p> Stock: {item.stock} unidades.</p>
            <ItemCount  stock={item.stock} initial= {1}/>
        </div>
    </div>
    : 
    <p>Cargando..</p>
    }
    </>
)
}

export default ItemDetail; 