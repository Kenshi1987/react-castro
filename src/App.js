import Navbar from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  
  return (

    <div className="App">
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<ItemListContainer greeting/>}/>
          <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
          <Route path='/category/:categoryid' element = {<ItemDetailContainer/>}/>        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
