import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="¿Tenes que hacer Home Office y no estas cómodo en tu casa? Your.Desk. tiene la solución para vos! Podrás encontrar una variedad de escritorios, sillas y sillones, de distintos materiales y tamaños, justo lo que estabas buscando!"/>
    </>
  );
}

export default App;
