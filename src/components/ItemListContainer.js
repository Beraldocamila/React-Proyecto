import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return(
        <>
        <p className="itemListContainer"> {greeting} </p>
        <ItemCount   stock={6} initial= {1}/>
        </>
    )

}

export default ItemListContainer;