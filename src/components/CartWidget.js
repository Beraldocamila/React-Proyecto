import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const CartWidget = () =>{
return(
    <Badge badgeContent={5} color="secondary" className="badge">
        <ShoppingCartIcon />
    </Badge>

)

}

export default CartWidget;