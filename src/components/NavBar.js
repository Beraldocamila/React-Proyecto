import logo from '../images/logoDesk.png';
import SearchIcon  from './SearchIcon';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { Categories, Nav, StyledLink, IconsRight } from './styledComponents';



const NavBar = () => {
    return (
        <>
        <Nav>
            <Link to='/'><img className= "logo" src={logo} alt="logo" height="100" width="200" /></Link>
            <Categories>
                    <StyledLink to='/category/1'>ESCRITORIOS</StyledLink>
                    <StyledLink to='/category/2'>SILLAS</StyledLink>
                    <StyledLink to='/category/3'>BIBLIOTECAS</StyledLink>
            </Categories>
            <IconsRight>
                <SearchIcon />
                <CartWidget />
            </IconsRight>
            
        </Nav>
        </>
    );
}

export default NavBar;
