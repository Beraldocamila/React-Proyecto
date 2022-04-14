import logo from '../images/logoDesk.png';
import SearchIcon  from './SearchIcon';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <>
        <div className="nav">
            <Link to='/'><img className= "logo" src={logo} alt="logo" height="100" width="200" /></Link>
            <div >
                <ul className="categories">
                    <Link to='/category/1'><li>Escritorios</li></Link>   
                    <Link to='/category/2'><li>Sillas</li></Link> 
                    <Link to='/category/3'><li>Bibliotecas</li></Link> 
                    <Link to='/category/4'><li>Sillones</li></Link> 
                </ul>
            </div>
            <div className='iconsRight'>
                <SearchIcon />
                <CartWidget />
                
            </div>
            
        </div>
        </>
    );
}

export default NavBar;
