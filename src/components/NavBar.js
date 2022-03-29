import logo from './logoDesk.png';

const NavBar = () => {
    return (
        <>
        <div className="nav">
            <img className= "logo" src={logo} alt="logo" height="20%" width="20%" />
            <div >
                <ul className="categories">
                    <li><a href="a">Escritorios</a></li>
                    <li><a href="a">Sillas</a></li>
                    <li><a href="a">Bibliotecas</a></li>
                    <li><a href="a">Sillones</a></li>
                </ul>
            </div>
            <div></div>
            
        </div>
        </>
    );
}

export default NavBar;
