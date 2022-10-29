import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Prueba from './components/Prueba';


function App() {
  return (
    <div className="App"> 
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos al e-commerce de videojuegos"}/>
    <Prueba saludo1/>
    
    </div>
  );
}

export default App;
