import React from "react"
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"





const Item = ({id, title, price, stock, picture}) =>{
    return(
        <Card className="cardDesk" key={id} >
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={picture} className="imgDesk"/> 
            <Card.Body>

                <Card.Text>Price: {price}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Link to={`/item/${id}`}><Card.Text>MAS INFO</Card.Text></Link>
                <button>ADD TO CART</button>
            </Card.Body>

        </Card>
    )
}

export default Item;