import logo from '../images/logoDesk.png';
import SearchIcon  from './SearchIcon';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <>
        <div className="nav">
            <img className= "logo" src={logo} alt="logo" height="100" width="200" />
            <div >
                <ul className="categories">
                    <li><a href="a">Escritorios</a></li>
                    <li><a href="a">Sillas</a></li>
                    <li><a href="a">Bibliotecas</a></li>
                    <li><a href="a">Sillones</a></li>
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
