import Navbar from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import { CartProvider } from './context/CartContext';



function App() {

  
  return (

    <div className="App">
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<ItemListContainer greeting/>}/>
          <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
          <Route path='/category/:categoryid' element = {<ItemListContainer/>}/>        
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/checkout' element= {<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
