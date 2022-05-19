import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { buttonBaseClasses, Card } from "@mui/material";


// NAVBAR

const Nav = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');
    background-color: #efd3bbbe;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    font-family: 'Rajdhani', sans-serif;
`;

const Categories = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    letter-spacing: 2px;
    text-align: center;
    font-size: 18px;
    font-weight: bolder;
`;

const StyledLink = styled(Link)`

    display: inline-block;
    text-decoration: none;
    width: 140px;
    color: #a4614e;
    &:hover {
        font-size:20px;
        color: #b87562c9;
    }
`;

const IconsRight =styled.div`
    display: flex;
    justify-content: space-between;
    margin-right:30px;
    color: #a4614e;
`;

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    color: #a4614e;
    &:hover {
        color: #b87562c9;
    }
`
//ITEM LIST CONTAINER

const Intro = styled.p`
    text-align: center;
    margin: 50px;
    color: #a4614e;
    font-size: 20px;
    font-weight: bolder;
    font-family: 'Rajdhani', sans-serif;
`;

const ItemsContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px;
    padding: 100px;
`;

const StyledCards = styled(Card)`
    text-align: center;
    margin-bottom: 100px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bolder;
    padding: 20px;
`;

//ITEM

const StyledLinkCard = styled(Link)`
    text-decoration: none;
    border: 1px solid #efd3bbbe;
    padding: 5px;
    color: #a4614e;
    transition: color 200ms;

    &:is(:hover, :focus){
        border: 1px solid #efd3bbbe;
        background-color: #efd3bbbe;
    }
`

//ITEM DETAILS

const ContainerDetail = styled.div`
    display: flex;
    margin-top:20px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bolder;
`

const ContainerImg = styled.img`
    height: 350px;
    width: 350px;
`

const DetailDescription = styled.div`
    width: 50%;
`

const TitleId = styled.h1`
    color: #a4614e;
    text-shadow: 2px 5px 3px #a4614e; 
    font-weight: 800;
`
const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
heigth: 100px;
`


//ITEM COUNT

const ContainerAddButton= styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Rajdhani', sans-serif;
font-size:20px;
`

const IncrementDecrement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size:20px;
    
`
const Amount = styled.p`
    margin: 0px 10px 0px 10px;
`


const ItemCountButton =styled.div`
    font-family: 'Rajdhani', sans-serif;
`
const Button = styled.button`
    background-color: #efd3bbbe;
    border: 2px solid #efd3bbbe;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bolder;
    font-size:20px;
    border-radius:20px;
    margin: 10px;
    padding: 5px;
`

//CART

const ContainerCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  space-around;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 800;
`
const Empty = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    font-size: 30px;
    position: absolute;
    left: 10px;
`

const CartTitle= styled.h3`
text-decoration: underline;
`

const Total = styled.div`
border: 2px solid  #efd3bbbe;
margin-top: 10px;
padding: 10px;
position: sticky;
top:20px;

`
export { 
    Nav, Categories, StyledLink, 
    IconsRight, StyledShoppingCartIcon, 
    Intro, ItemsContainer, StyledCards, 
    StyledLinkCard, ContainerDetail, 
    ContainerImg, DetailDescription, 
    TitleId, ItemCountButton, IncrementDecrement,
    ContainerAddButton, Amount, Button, Buttons,
    ContainerCart, Empty, CartTitle, Total
}