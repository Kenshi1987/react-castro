import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import {Contador} from "./components/Counter/Contador"

function App() {

  const onAdd = (contador) => {
    console.log ('Soy onAdd y el valor del contador es:', contador)
  }

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>  
      <Contador onAdd={onAdd}/>    
    </div>
  );
}

export default App;
