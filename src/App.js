import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting="¿Tenes que hacer Home Office y no estas cómodo en tu casa? Your.Desk. tiene la solución para vos! Podrás encontrar una variedad de escritorios, sillas y sillones, de distintos materiales y tamaños, justo lo que estabas buscando!"/> } />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path= '/item/:idItem' element= {<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
