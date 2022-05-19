import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';



function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer intro="¿Tenes que hacer Home Office y no estas cómodo en tu casa? Your.Desk. tiene la solución para vos! Podrás encontrar una variedad de escritorios, sillas y bibliotecas, de distintos materiales y tamaños, justo lo que estabas buscando!"/> } />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path= '/item/:idItem' element= {<ItemDetailContainer />} />
              <Route path= '/cart' element = {<Cart />} />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
