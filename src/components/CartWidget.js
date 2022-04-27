import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";




const CartWidget = () =>{
    const cart = useContext(CartContext);

return(
    
    <Link to='/cart'>
        <Badge badgeContent={cart.totalAmountItems()} color="secondary" className="badge">
            <ShoppingCartIcon />
        </Badge>
    </Link>

)

}

export default CartWidget;