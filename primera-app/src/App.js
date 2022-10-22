import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App"> 
    <NavBar header = {"Bienvenidos a la pagina de comercio de esclavos."} cont = {100} />
    <ItemListContainer greeting={"Bienvenidos al e-commerce de videojuegos"}/>
    
    </div>
  );
}

export default App;
