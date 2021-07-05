import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainter'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainter from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Saludos!"/>
      <ItemDetailContainter></ItemDetailContainter>
      </div>
    
  );
}

export default App
