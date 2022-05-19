import React from "react"
import Card from 'react-bootstrap/Card'
import { StyledCards, StyledLinkCard } from "./styledComponents";





const Item = ({id, title, price, stock, picture}) =>{
    return(

        <StyledCards key={id} >
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={picture} style={{height: "350px", width: "350px"}}/>
            <Card.Body>

                <Card.Text>Price: ${price}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <StyledLinkCard to={`/item/${id}`}>VER MÁS</StyledLinkCard>
            </Card.Body>

        </StyledCards>
    )
}

export default Item;