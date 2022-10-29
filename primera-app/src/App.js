import './App.css';
import Card from './components/card';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';




function App() {
  return (
    <div className="App"> 
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos al e-commerce de videojuegos"}/>
    <Card producto={"Devil May Cry"} productoUno={"Uncharted 4"} productoDos={"Tomb Raider"}/>
    <Contador/>
    
    </div>
  );
}

export default App;
