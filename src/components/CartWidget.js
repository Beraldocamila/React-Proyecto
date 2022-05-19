import * as React from 'react';
import Badge from '@mui/material/Badge';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {StyledShoppingCartIcon} from './styledComponents';




const CartWidget = () =>{
    const cart = useContext(CartContext);

return(
    
    <Link to='/cart'>
        <Badge badgeContent={cart.totalAmountItems()} color="secondary" className="badge">
            <StyledShoppingCartIcon/>
        </Badge>
    </Link>

)

}

export default CartWidget;